var audioContext = null;
var isPlaying = false;
var current4thNote;
var tempo = 120.0;
var lookahead = 25.0;
var scheduleAheadTime = 0.1;
var nextNoteTime = 0.0;
var timerWorker = null;
var metronomeOn = false;
var isRecording = false;

function secondsPerBeat(){
  var secondsInMinute = 60.0
  var beatsPerMinute = tempo
  return secondsInMinute/beatsPerMinute;
}

function secondsPerBar(){
  var seconds = secondsPerBeat()
  var secondsPerBar = seconds * 4
  return secondsPerBar
  // var seconds = parseFloat((secondsPerBeat(tempo) * 4).toFixed(16))
}

function nextNote() {
  var secondsPerBeat = 60.0 / tempo;
  nextNoteTime += secondsPerBeat;

  current4thNote++;
  if (current4thNote == 4) {
    current4thNote = 0;
  }
}


function scheduleNote (beatNumber, time) {

  if (metronomeOn) {
    bufferOscillator(beatNumber);
    cueOscillator(beatNumber,time);
  }

  if (beatNumber == 0){
    if (isRecording){
      cueEvent(beatNumber, time, activateRecording)
      // cueEvent(beatNumber, time + secondsPerBar(), stopRecording)
      cueEvent(beatNumber, (time + secondsPerBar()), stopRecording)

      isRecording = false;
    }

    if(loopFactory.isNotEmpty()){
      cueActiveTracks(time)
    }
  }
}

function scheduler() {
  while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
    scheduleNote(current4thNote, nextNoteTime);
    nextNote();
  }
}

function play() {
  isPlaying = !isPlaying;

  if (isPlaying) {
    current4thNote = 0;
    nextNoteTime = audioContext.currentTime;
    timerWorker.postMessage("start");
    return 'stop';
  } else {
    timerWorker.postMessage('stop');
    return 'play';
  }
}

function init() {
  audioContext = new AudioContext();
  timerWorker = new Worker("/scripts/masterBeater.js")

  timerWorker.onmessage = function(e) {
    if (e.data == "tick") {
      scheduler();
    } else {
      console.log("Message: " + e.data);
    };
  };

  timerWorker.postMessage({"interval":lookahead})

  var recordingButton = document.getElementById('recording-button');
  recordingButton.onclick = function() {
    isRecording = !isRecording
  };

  var stopBeaterButton = document.getElementById('stop-beater-button');
  stopBeaterButton.onclick = function() {
    play()
  };

  var metronomeButton = document.getElementById('metronomeButton');
  metronomeButton.onclick = function() {
    metronomeOn = !metronomeOn
  }

  play();
}


window.addEventListener('load', init);

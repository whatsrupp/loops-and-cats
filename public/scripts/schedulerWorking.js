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

function nextNote() {
  var secondsPerBeat = 60.0 / tempo;
  nextNoteTime += secondsPerBeat;

  current4thNote++;
  if (current4thNote == 4) {
    current4thNote = 0;
  }
}

function testFunction (){
  console.log('Test');
}

function scheduleNote (beatNumber, time) {

  if (metronomeOn) {
    bufferOscillator(beatNumber);
    cueOscillator(beatNumber,time);
  }

  cueEvent(beatNumber, time, testFunction);

  if (beatNumber == 0){
    if (isRecording){
      var timeNow = audioContext.currentTime;
      var timeRecordingShouldStart = time;
      var timeUntilRecording = timeRecordingShouldStart - timeNow;
      setTimeout(function(){activateRecording()}, timeUntilRecording);
      isRecording = false;
    }

    if(loopFactory.isNotEmpty()){
      bufferTrack()
      cueTrack(time)
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
  // loopFactory = new LoopFactory();
  // waveMaker = new WaveMaker();

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
    isRecording = !isRecording;
    if(isRecording){
      console.log(recordingButton.disabled);
      recordingButton.disabled = true;
      console.log(recordingButton.disabled)
    }
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

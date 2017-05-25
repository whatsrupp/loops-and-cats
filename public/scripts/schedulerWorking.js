var audioContext = null;
var isPlaying = false;
var startTime;
var current4thNote;
var tempo = 120.0;
var lookahead = 25.0;
var scheduleAheadTime = 0.1;
var nextNoteTime = 0.0;
var noteResolution = 2; // 0 = 16th, 1 = 8th, 2 = 4th
var noteLength = 0.05;
var notesInQueue = [];
var timerWorker = null;
var testBuffer = null;
var isRecording = false;
var metronomeOn = false;

function nextNote() {
  var secondsPerBeat = 60.0 / tempo;
  nextNoteTime += secondsPerBeat;

  current4thNote++;
  if (current4thNote == 4) {
    current4thNote = 0;
  }
}

function scheduleNote (beatNumber, time) {
  notesInQueue.push({note: beatNumber, time: time});
  osc = audioContext.createOscillator();

  osc.connect (audioContext.destination);
  if (beatNumber == 0) {
    osc.frequency.value = 880.0;
  } else {
    osc.frequency.value = 440.0;
  }

  if (metronomeOn) {
    osc.start(nextNoteTime);
    osc.stop(nextNoteTime + noteLength);
  }

  if (beatNumber == 0 && isRecording == true){
    var timeNow = audioContext.currentTime;
    var timeRecordingShouldStart = time;
    var timeUntilRecording = timeRecordingShouldStart - timeNow;

    setTimeout(function(){activateRecording()}, timeUntilRecording);
    isRecording = false;
  }

  if (beatNumber == 0){
    if (loopFactory.loops[0]) {
      loadTestSound(loopFactory.loops[0].url)
      playSound(testBuffer, time)
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

function loadTestSound(src){
  var request = new XMLHttpRequest();


  request.open('GET', src, true);
  request.responseType = 'arraybuffer';
  request.onload = function(){
    audioContext.decodeAudioData(request.response, function(buffer){
      testBuffer = buffer;
    }, function (){
      console.log ('Error')
    });
  }
  request.send();
}

function playSound(buffer,time){
  var source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start(time)
}

function init() {
  audioContext = new AudioContext();
  timerWorker = new Worker("/scripts/masterBeater.js")
  loopFactory = new LoopFactory();
  waveMaker = new WaveMaker();

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

  var metronomeButton = document.getElementById('metronomeButton');
  metronomeButton.onclick = function() {
    metronomeOn = !metronomeOn
  }

  play();
}

window.addEventListener('load', init);

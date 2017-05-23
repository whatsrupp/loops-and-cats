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

  var osc = audioContext.createOscillator();
  osc.connect (audioContext.destination);
  if (beatNumber == 0) {
    osc.frequency = 880.0;
  } else {
    osc.frequency.value = 440.0;
  }

  osc.start(time);
  osc.stop(time + noteLength);
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
  timerWorker = new Worker("/scripts/metronomeWorker.js")

  timerWorker.onmessage = function(e) {
    if (e.data == "tick") {
      scheduler();
    } else {
      console.log("Message: " + e.data);
    };
  };

  timerWorker.postMessage({"interval":lookahead})
}

window.addEventListener('load', init);

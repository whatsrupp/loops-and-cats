// function init() {
//   var audioContext = new AudioContext();
//   var timerWorker = new Worker("/scripts/masterBeater.js")
//
//   timerWorker.onmessage = function(e) {
//     if (e.data == "tick") {
//       scheduler();
//     } else {
//       console.log("Message: " + e.data);
//     };
//   };
//
//
//   timerWorker.postMessage({"interval":lookahead})
//
//   play()
// }
//
// window.addEventListener('load', init);
loopFactory = new LoopFactory();
waveMaker = new WaveMaker();
var audioSrc = '/audio/1234.ogg';

populateDivsWithLoops = function() {
  for(var i = 0; i < 8; i++) {
    loopFactory.create(audioSrc, i);
  }
};

populateDivsWithLoops();

// for(var i=1; i <= 8; i++){
//   if(document.getElementById('#waveform' + i.toString()) === ""){

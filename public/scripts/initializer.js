function init() {
  var audioContext = new AudioContext();
  var timerWorker = new Worker("/scripts/masterBeater.js")

  timerWorker.onmessage = function(e) {
    if (e.data == "tick") {
      scheduler();
    } else {
      console.log("Message: " + e.data);
    };
  };


  timerWorker.postMessage({"interval":lookahead})

  play()
}

window.addEventListener('load', init);

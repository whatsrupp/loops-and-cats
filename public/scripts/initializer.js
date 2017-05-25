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
}

window.addEventListener('load', init);

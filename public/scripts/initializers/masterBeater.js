(function(exports){

  var lookahead = 25.0;
  initializeMasterBeater = function(){
    timerWorker.onmessage = function(e) {
      if (e.data == "tick") {
        scheduler.schedule();
      } else {
        console.log("Message: " + e.data);
      };
    };

    timerWorker.postMessage({"interval":lookahead})
    timerWorker.postMessage("start");
  }

  function toggleMasterBeaterState() {
    scheduler.isPlaying = !scheduler.isPlaying;

    if (scheduler.isPlaying) {
      current4thNote = 0;
      nextNoteTime = audioContext.currentTime;
      timerWorker.postMessage("start");
    } else {
      timerWorker.postMessage('stop');
    }
  }
  exports.toggleMasterBeaterState = toggleMasterBeaterState;
  exports.initializeMasterBeater = initializeMasterBeater;
})(this)

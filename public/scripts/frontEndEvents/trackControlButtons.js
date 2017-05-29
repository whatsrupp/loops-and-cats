(function(exports){

  initializeMuteButtons = function(){
    initializeIndividualButtons();
    initializeMuteAllButton();
    initializeSoloButtons();
    initializeDeleteButtons();
    initializeStopBeaterButton();
    initializePlayAllButton();
    initializeDecreaseButton();
    initializeIncreaseButton();

  }

  initializeIndividualButtons = function(){
    var muteButtons = document.getElementsByClassName('muteButton');
    for(var i = 0; i < muteButtons.length; i++){
      muteButtons[i].onclick = function() {
        var index = (Number(this.id.split('muteButton-')[1]) - 1);
        loopFactory.loops[index].toggleMuteState()
      }
    }
  }
  initializePlayAllButton = function(){
    var playAllButton = document.getElementById('play-all');
    playAllButton.onclick = function() {
      for(var i = 0; i < loopFactory.loops.length; i++){
        loopFactory.loops[i].unmuteTrack()
      }
    }
  }

  initializeMuteAllButton = function(){
    var muteAllButton = document.getElementById('mute-all');
    muteAllButton.onclick = function() {
      for(var i = 0; i < loopFactory.loops.length; i++){
        loopFactory.loops[i].muteTrack()
      }
    }
  }

  initializeDeleteButtons = function(){
    var delButtons = document.getElementsByClassName('deleteButton')
    var blankAudio = 'audio/Silence.ogg'
    for(var i = 0; i < delButtons.length; i++){
      delButtons[i].onclick = function() {
        var index = (Number(this.id.split('deleteButton-')[1]) - 1)
        loopFactory.loops[index].updateURL(blankAudio)
        spinningHeads.stopSpin(loopFactory);
      }
    }
  }

  initializeStopBeaterButton = function(){
    var stopBeaterButton = document.getElementById('stop-beater-button');
    stopBeaterButton.onclick = function() {
      toggleMasterBeaterState()
    };
  }

  initializeSoloButtons = function(){
    var soloButtons = document.getElementsByClassName('soloButton');
    for(var j = 0; j < soloButtons.length; j++){
      soloButtons[j].onclick = function() {
        for(var i = 0; i < soloButtons.length; i++) {
          var index = (Number(this.id.split('soloButton-')[1]) - 1);
          loopFactory.loops[i].muteTrack()
          loopFactory.loops[index].unmuteTrack();
        }
      }
    }

    initializeDecreaseButton = function() {
      var decreaseButton = document.getElementById('decrease-recording-length');
      var display = document.getElementById('recording-length-display');
      decreaseButton.onclick = function() {
        if(scheduler.recordingLength > 1) {
          scheduler.recordingLength /= 2
        }
        display.innerHTML = "Record Length: " + scheduler.recordingLength
      }
    }

    initializeIncreaseButton = function() {
      var increaseButton = document.getElementById('increase-recording-length');
      var display = document.getElementById('recording-length-display');
      increaseButton.onclick = function() {
        if(scheduler.recordingLength < 8) {
          scheduler.recordingLength *= 2
        }
        display.innerHTML = "Record Length: " + scheduler.recordingLength
      }
    }



  }

  exports.initializeMuteButtons = initializeMuteButtons
})(this)

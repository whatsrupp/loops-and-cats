(function(exports){

  initializeAllButtons = function(){
    initializeIndividualMuteButtons();
    initializeMuteAllButton();
    initializeSoloButtons();
    initializeDeleteButtons();
    initializeStopBeaterButton();
    initializePlayAllButton();
    initializeDecreaseButton();
    initializeIncreaseButton();

  }

  initializeIndividualMuteButtons = function(){
    var muteButtons = document.getElementsByClassName('muteButton');
    for(var i = 0; i < muteButtons.length; i++){
      muteButtons[i].onclick = function() {
        var index = (Number(this.id.split('muteButton-')[1]) - 1);
        loopFactory.loops[index].toggleMuteState();
        checkActive();
      }
    }
  }
  initializePlayAllButton = function(){
    var playAllButton = document.getElementById('play-all');
    playAllButton.onclick = function() {
      for(var i = 0; i < loopFactory.loops.length; i++){
        loopFactory.loops[i].unmuteTrack()
      }
    checkActive();
    }
  }

  initializeMuteAllButton = function(){
    var muteAllButton = document.getElementById('mute-all');
    muteAllButton.onclick = function() {
      for(var i = 0; i < loopFactory.loops.length; i++){
        loopFactory.loops[i].muteTrack()
      }
    checkActive();
    }
  }

  initializeDeleteButtons = function(){
    var delButtons = document.getElementsByClassName('track-button deleteButton')
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
        var index = (Number(this.id.split('soloButton-')[1]) - 1);
        if(loopFactory.loops[index].solo === false) {
          for(var i = 0; i < soloButtons.length; i++) {
            loopFactory.loops[i].muteTrack();
            loopFactory.loops[i].unsoloTrack();
            loopFactory.loops[index].unmuteTrack();
            loopFactory.loops[index].soloTrack();
          }
        } else {
          for(var i = 0; i < soloButtons.length; i++) {
            loopFactory.loops[i].unmuteTrack();
            loopFactory.loops[i].unsoloTrack();
          }
        }
        checkActive();
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

  exports.initializeAllButtons = initializeAllButtons
})(this)

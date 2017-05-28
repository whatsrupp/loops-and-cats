(function(exports){

  initializeMuteButtons = function(){
    initializeIndividualButtons();
    initializeMuteAllButton();
    initializeSoloButtons();
    initializeDeleteButtons();
    initializeStopBeaterButton();
    initializePlayAllButton();
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
  }

  exports.initializeMuteButtons = initializeMuteButtons
})(this)

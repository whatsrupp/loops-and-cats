(function(exports){

  function Loop(url, waveMaker, number){
    this.isActive = true;
    this.url = url;
    this.number = number;
    this.waveMaker = waveMaker;
    this.waveform = this.waveMaker.createWave(this.url, this.number);

    this.toggleMuteState = function (){
      var currentState = this.waveform.getMute();
      this.waveform.setMute(!currentState)
    }
    this.muteTrack = function(){
      this.waveform.setMute(true);
    }

    this.unmuteTrack = function(){
      this.waveform.setMute(false);
    }

    this.updateIsActive = function() {
      this.isActive = !this.isActive;
    }

    this.makeActive = function() {
      this.isActive = true;
    }

    this.makeInactive = function() {
      this.isActive = false;
    }

    this.updateURL = function(url) {
      this.url = url
      this.waveform.load(url)
    }
  }

  exports.Loop = Loop;
})(this);

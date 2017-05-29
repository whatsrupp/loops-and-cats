(function(exports){

  function Loop(url, waveMaker, number){
    this.isActive = true;
    this.url = url;
    this.number = number;
    this.waveMaker = waveMaker;
    this.waveform = this.waveMaker.createWave(this.url, this.number);
    this.lengthInBars = 1;

    this.updateLength = function(newLength){
      this.lengthInBars = newLength;
    }

    this.toggleMuteState = function (){
      var currentState = this.waveform.getMute();
      this.waveform.setMute(!currentState)
      this.isActive = !this.isActive;
    }
    this.muteTrack = function(){
      this.waveform.setMute(true);
      this.isActive = false;
    }

    this.unmuteTrack = function(){
      this.waveform.setMute(false);
      this.isActive = true;
    }

    this.updateURL = function(url) {
      this.url = url
      this.waveform.load(url)
    }
  }

  exports.Loop = Loop;
})(this);

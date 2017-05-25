(function(exports){

  function Loop(url, waveMaker){
    this.isActive = true;
    this.url = url;
    this.waveMaker = waveMaker
    this.waveform = this.waveMaker.createWave(this.url)

    this.updateIsActive = function() {
      this.isActive = !this.isActive;
    }
  }

  exports.Loop = Loop;
})(this);

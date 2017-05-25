(function(exports){

  function Loop(url, waveMaker, number){
    this.isActive = true;
    this.url = url;
    this.number = number
    this.waveMaker = waveMaker
    this.waveform = this.waveMaker.createWave(this.url, this.number)


    this.updateIsActive = function() {
      this.isActive = !this.isActive;
    }
  }

  exports.Loop = Loop;
})(this);

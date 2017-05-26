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

    this.updateURL = function(url) {
      this.url = url
      this.waveform.load(url)
    }
  }

  exports.Loop = Loop;
})(this);

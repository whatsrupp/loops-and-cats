(function(exports){

  function WaveMaker(){
    this.createWave = function(url){
      var wave = WaveSurfer.create({
        container: '#waveform1',
        waveColor: 'violet',
        progressColor: 'purple'
      });
      wave.load(url)
      return wave
    }
  }

  exports.WaveMaker = WaveMaker;
})(this)

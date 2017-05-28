(function(exports){

  function WaveMaker(){
    this.createWave = function(url, number){
          var wave = WaveSurfer.create({
            container: '#waveform' + (number + 1).toString(),
            waveColor: 'violet',
            progressColor: 'purple'
          });
      wave.load(url);
      return wave;
    }
  }
  exports.WaveMaker = WaveMaker;
})(this);

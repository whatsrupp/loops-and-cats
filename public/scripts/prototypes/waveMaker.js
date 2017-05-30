(function(exports){

  function WaveMaker(){
    this.createWave = function(url, number){
      var element = 'waveform' + (number + 1)
      var waveformFrame = document.getElementById(element)
          var wave = WaveSurfer.create({
            container: waveformFrame,
            fillParent: true,
            waveColor: 'violet',
            progressColor: 'purple',
            height: waveformFrame.offsetHeight,
            audioContext: audioContext
          });
      wave.load(url);
      return wave;
    }
  }
  exports.WaveMaker = WaveMaker;
})(this);

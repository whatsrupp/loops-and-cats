(function(exports){

  function WaveMaker(){
    this.createWave = function(url, number){
      var element = 'waveform' + (number + 1)
      var waveformFrame = document.getElementById(element)
          var wave = WaveSurfer.create({
            container: waveformFrame,
            fillParent: true,
            waveColor: '#dff302',
            progressColor: '#dff302',
            height: waveformFrame.offsetHeight,
            audioContext: audioContext
          });
      wave.load(url);
      return wave;
    }
  }
  exports.WaveMaker = WaveMaker;
})(this);

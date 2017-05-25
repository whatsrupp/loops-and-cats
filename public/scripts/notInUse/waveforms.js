(function(exports){

  var waveSurfers = [];

  for (var i = 1; i <= 8; i++){
    var waveTest = WaveSurfer.create({
      container: '#waveform' + i,
      waveColor: 'violet',
      progressColor: 'purple'
    });
    waveTest.load('/audio/myRecording01.wav');
    waveSurfers.push(waveTest)
  }

  exports.waveTest = waveTest;
  exports.waveSurfers = waveSurfers;

})(this)

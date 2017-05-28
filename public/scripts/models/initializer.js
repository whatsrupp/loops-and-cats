(function(exports){
  var audioSrc = 'audio/Silence.ogg';

  function init() {
    initialiseRequiredPrototypes();
    populateDivsWithLoops();
  }

  function populateDivsWithLoops () {
    for(var i = 0; i < 8; i++) {
      loopFactory.create(audioSrc, i);
    }
  }
  function initialiseRequiredPrototypes (){
    waveMaker = new WaveMaker();
    loopFactory = new LoopFactory(audioSrc, waveMaker, 1);
    spinningHeads = new SpinningHeads();
  }


  exports.init = init
})(this)

window.addEventListener('load', init);


microphone = Object.create(WaveSurfer.Microphone);

microphone.on('deviceReady', function(stream) {
    console.log('Device ready!', stream);
});
microphone.on('deviceError', function(code) {
    console.warn('Device error: ' + code);
});

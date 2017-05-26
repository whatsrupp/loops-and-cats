waveMaker = new WaveMaker();
var audioSrc = 'audio/Silence.ogg';
loopFactory = new LoopFactory(audioSrc, waveMaker, 1);

populateDivsWithLoops = function() {
  for(var i = 0; i < 8; i++) {
    loopFactory.create(audioSrc, i);
  }
};

populateDivsWithLoops();

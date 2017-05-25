loopFactory = new LoopFactory();
waveMaker = new WaveMaker();
var audioSrc = '/audio/Silence.ogg';

populateDivsWithLoops = function() {
  for(var i = 0; i < 8; i++) {
    loopFactory.create(audioSrc, i);
  }
};

populateDivsWithLoops();

(function(exports){
  var audioSrc = 'audio/Silence.ogg';

  function init() {
    initialiseRequiredPrototypes();
    populateDivsWithLoops();
    initializeRecordButton();
    initializeMetronomeButton();
    openRecordingStream();
    initializeMasterBeater();
    initializeMuteButtons();
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
    audioContext = new AudioContext();
    masterBeater = new Worker("/scripts/workers/masterBeater.js")
    scheduler = new Scheduler();
  }


  exports.init = init
})(this)

window.addEventListener('load', init);

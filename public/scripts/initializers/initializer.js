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
    initializeKeyboardShortcuts();
    initializeResponsiveWaveforms();
  }

  function populateDivsWithLoops () {
    for(var i = 0; i < 8; i++) {
      loopFactory.create(audioSrc, i);
    }
  }
  function initialiseRequiredPrototypes (){
    waveMaker = new WaveMaker();
    loopFactory = new LoopFactory();
    spinningHeads = new SpinningHeads();
    audioContext = new AudioContext();
    masterBeater = new Worker("/scripts/workers/masterBeater.js")
    scheduler = new Scheduler();
  }

  exports.init = init
})(this)

window.addEventListener('load', init);

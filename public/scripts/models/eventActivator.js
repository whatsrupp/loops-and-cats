(function(exports){

  // There is no event associated with the commencement of Web Audio Tracks,
  // However, there is one associated with the end of a playback
  // Therefore, a dummy oscillator of zero length is used to schedule callbacks
  // precisely at the start of a bar.

  var dummyOscillator = null;

  function loadEventActivator(nextBeatNumber){
    var dummyOscillatorFrequency = 200;
    dummyOscillator = audioContext.createOscillator();
    dummyOscillator.connect(audioContext.destination);
    dummyOscillator.frequency.value = dummyOscillatorFrequency

  }

  function addFunctionToCallback(callbackFunction){
    dummyOscillator.onended = function() {
      callbackFunction();
      console.log('Finished');
    }
  }

  function cueEvent(nextBeatNumber, nextBeatTime, callbackFunction){
    loadEventActivator()
    addFunctionToCallback(callbackFunction)
    scheduleEventExecution(nextBeatTime)
  }

  function scheduleEventExecution(nextBeatTime){
    dummyOscillator.start(nextBeatTime)
    dummyOscillator.stop(nextBeatTime)
  }

  function isStartOfBar (nextBeatNumber){
    return nextBeatNumber == 0
  }

  exports.cueEvent = cueEvent

})(this)

(function(exports){

  var oscillator = null;
  var OscillatorPlayLength = 0.05;

  function bufferOscillator(nextBeatNumber){
    var HighFrequencyHz = 880.0;
    var LowFrequencyHz = 440.0;

    oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    if(isStartOfBar(nextBeatNumber)){
      oscillator.frequency.value = HighFrequencyHz
    }else{
      oscillator.frequency.value = LowFrequencyHz
    }
  }

  function cueMetronome(nextBeatNumber, nextBeatTime){
    oscillator.start(nextBeatTime)
    oscillator.stop(nextBeatTime + OscillatorPlayLength)
  }

  function isStartOfBar (nextBeatNumber){
    return nextBeatNumber == 0
  }

  exports.bufferOscillator = bufferOscillator
  exports.cueMetronome = cueMetronome

})(this)

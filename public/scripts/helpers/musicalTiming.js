(function(exports){

var beatsInBar = 4;

  function secondsPerBeat(tempo){
    var secondsInMinute = 60.0;
    var beatsPerMinute = tempo;
    return secondsInMinute/beatsPerMinute;
  }

  function secondsPerBar(tempo){
    var seconds = secondsPerBeat(tempo);
    var secondsPerBar = seconds * beatsInBar;
    return secondsPerBar;
    // var seconds = parseFloat((secondsPerBeat(tempo) * 4).toFixed(16))
  }

  function nextBeatInBar(beatNumber){
    return(beatNumber % beatsInBar)
  }

  exports.secondsPerBeat = secondsPerBeat;
  exports.secondsPerBar = secondsPerBar;
  exports.nextBeatInBar = nextBeatInBar;
})(this);

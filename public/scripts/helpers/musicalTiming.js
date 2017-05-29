(function(exports){


  function secondsPerBeat(tempo){
    var secondsInMinute = 60.0;
    var beatsPerMinute = tempo;
    return secondsInMinute/beatsPerMinute;
  }

  function secondsPerBar(tempo){
    var seconds = secondsPerBeat(tempo);
    var secondsPerBar = seconds * 4;
    return secondsPerBar;
    // var seconds = parseFloat((secondsPerBeat(tempo) * 4).toFixed(16))
  }

  exports.secondsPerBeat = secondsPerBeat;
  exports.secondsPerBar = secondsPerBar;
})(this);

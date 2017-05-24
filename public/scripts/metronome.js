(function(exports) {

function Metronome() {

  this.currentBeatNumber = 0
  this.tempo = 120
  this.nextBeatTime = 0.0


  this.updateBeatNumber = function() {
    this.currentBeatNumber += 1;
    if(this.currentBeatNumber == 4){
      this.currentBeatNumber = 0;
    }
  }

  this.nextBeatInfoUpdate = function() {
    var secondsInMinute = 60.0;
    var secondsPerBeat = secondsInMinute / this.tempo;
    this.nextBeatTime += secondsPerBeat;
  }

}

exports.Metronome = Metronome;
})(this);

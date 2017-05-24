(function(exports) {

function Metronome() {

  this.currentBeatNumber = 0


  this.updateBeatNumber = function() {
    this.currentBeatNumber += 1;
    if(this.currentBeatNumber == 4){
      this.currentBeatNumber = 0;
    }
  }

}

exports.Metronome = Metronome;
})(this);

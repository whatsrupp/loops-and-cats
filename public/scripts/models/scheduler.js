(function(exports) {

function Scheduler() {

  this.nextBeatNumber = 0
  this.tempo = 120
  this.nextBeatTime = 0.0
  this.beatsInQueue = []


  this.updateBeatNumber = function() {
    this.nextBeatNumber += 1;
    if(this.nextBeatNumber == 4){
      this.nextBeatNumber = 0;
    }
  }

  this.nextBeatInfoUpdate = function() {
    var secondsInMinute = 60.0;
    var secondsPerBeat = secondsInMinute / this.tempo;
    this.nextBeatTime += secondsPerBeat;
  }

  this.scheduleBeat = function(){
    var beatObject = {
      beat: this.nextBeatNumber,
      time: this.nextBeatTime
    };
    this.beatsInQueue.push(beatObject);
  }

  this.playAudioFile = function (buffer, time){
  }

}

exports.Scheduler = Scheduler;
})(this);

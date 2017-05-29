(function(exports) {

function Scheduler() {

  this.nextBeatNumber = 0;
  this.tempo = 120;
  this.nextBeatTime = 0.0;
  this.metronomeOn = false;
  this.scheduleAheadTime = 0.1;
  this.isPlaying = false;
  this.isRecording = false;
  this.recordingLength = 1;

  this.updateNextBeatNumber = function() {
    this.nextBeatNumber += 1;
    if(this.nextBeatNumber == 32){
      this.nextBeatNumber = 0;
    }
  }

  this.updateNextBeatTime = function() {
    var secondsInMinute = 60.0;
    var secondsPerBeat = secondsInMinute / this.tempo;
    this.nextBeatTime += secondsPerBeat;
  }

  this.scheduleBeat = function(){
    if (this.metronomeOn) {
      bufferOscillator(nextBeatInBar(this.nextBeatNumber));
      cueMetronome(nextBeatInBar(this.nextBeatNumber),this.nextBeatTime);
    }

    if (nextBeatInBar(this.nextBeatNumber) == 0){
      if (this.isRecording){
        cueFunction(nextBeatInBar(this.nextBeatNumber), this.nextBeatTime, startRecording)
        cueFunction(nextBeatInBar(this.nextBeatNumber), (this.nextBeatTime + (secondsPerBar(this.tempo) * this.recordingLength)), stopRecording)
        this.isRecording = false;
      }

      if(loopFactory.isNotEmpty()){
        cueActiveTracks(nextBeatInBar(this.nextBeatNumber),this.nextBeatTime)
      }
    }
  }

  this.schedule = function (){
    while (this.nextBeatTime < audioContext.currentTime + this.scheduleAheadTime) {
      this.scheduleBeat(nextBeatInBar(this.nextBeatNumber), this.nextBeatTime);
      this.updateNextBeatTime()
      this.updateNextBeatNumber()
    }
  }
}

exports.Scheduler = Scheduler;
})(this);

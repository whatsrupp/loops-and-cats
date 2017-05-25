'use strict';

var assert = require('assert')
var SchedulerModule = require('../../public/scripts/models/scheduler.js')
var Scheduler = SchedulerModule.Scheduler
var chai = require("chai")
var sinonChai = require("sinon-chai")
chai.use(sinonChai)

describe('Scheduler Model', function(){

  describe('variables', function(){
  });

  describe('bufferAudio', function(){

  });

  describe('scheduleBeat', function(){
    it('updates beatsInQueue', function(){
      var scheduler = new Scheduler();
      var beat = 0
      var time = 0
      var expectedBeatObject = {beat: beat, time: time}

      scheduler.scheduleBeat()
      assert.equal(scheduler.beatsInQueue[0].time, expectedBeatObject.time)
      assert.equal(scheduler.beatsInQueue[0].beat, expectedBeatObject.beat)
    });

    it('calls load audio file', function(){

    });
    it('calls load oscillator', function(){

    });
    it('calls play oscillator', function(){

    });
    it('calls play audiofile', function(){

    });
  });

  describe('updatesEveryTick', function(){
    it('calls schedule beat', function(){

    });
    it('calls updatePlayState', function(){

    });
  });

  describe('updatePlayState', function(){

    describe('context: is playing', function(){
      it('changes to not playing', function(){

      });

      it('resets the beat number', function(){

      });
      it('resets the next note time', function(){

      });
      it('sends a stop message to the timer worker', function(){

      });

    });

    describe('context: is not playing', function(){
      it('changes to playing', function(){

      });
      it('sends a start message to the timer worker', function(){

      });
    });


  });

  describe('init', function(){

  });

  describe('nextNote', function(){
    it('increments the beat', function(){
      var scheduler = new Scheduler();
      var initialBeatTime = scheduler.nextBeatTime;
      scheduler.nextBeatInfoUpdate();
      var updatedBeatTime = scheduler.nextBeatTime;
      var difference = updatedBeatTime - initialBeatTime;
      var timePerBeat = 60.0 / scheduler.tempo;
      assert.equal(difference, timePerBeat)
    });
  });

  describe('updateBeatNumber', function() {
    it('it increments beat number', function(){
      var scheduler = new Scheduler();
      var initialBeatNumber = scheduler.nextBeatNumber
      scheduler.updateBeatNumber();
      assert.equal(scheduler.nextBeatNumber, initialBeatNumber + 1)
    });
    it('wraps the beat at the end of the bar', function() {
      var scheduler = new Scheduler();
      scheduler.updateBeatNumber();
      scheduler.updateBeatNumber();
      scheduler.updateBeatNumber();
      scheduler.updateBeatNumber();
      assert.equal(scheduler.nextBeatNumber, 0)
    })
  });
});

'use strict';

var assert = require('assert')
var Metronome = require('../../public/scripts/metronome.js')
var chai = require("chai")
var sinonChai = require("sinon-chai")
chai.use(sinonChai)

describe('Metronome Model', function(){

  describe('variables', function(){
  });

  describe('bufferAudio', function(){

  });

  describe('scheduleBeat', function(){
    it('updates beatsInQueue', function(){
      var metronome = new Metronome.Metronome();
      var beat = 0
      var time = 0
      var expectedBeatObject = {beat: beat, time: time}

      metronome.scheduleBeat()
      assert.equal(metronome.beatsInQueue[0].time, expectedBeatObject.time)
      assert.equal(metronome.beatsInQueue[0].beat, expectedBeatObject.beat)
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

  describe('scheduler', function(){

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
      var metronome = new Metronome.Metronome();
      var initialBeatTime = metronome.nextBeatTime;
      metronome.nextBeatInfoUpdate();
      var updatedBeatTime = metronome.nextBeatTime;
      var difference = updatedBeatTime - initialBeatTime;
      var timePerBeat = 60.0 / metronome.tempo;
      assert.equal(difference, timePerBeat)
    });
  });

  describe('updateBeatNumber', function() {
    it('it increments beat number', function(){
      var metronome = new Metronome.Metronome();
      var initialBeatNumber = metronome.nextBeatNumber
      metronome.updateBeatNumber();
      assert.equal(metronome.nextBeatNumber, initialBeatNumber + 1)
    });
    it('wraps the beat at the end of the bar', function() {
      var metronome = new Metronome.Metronome();
      metronome.updateBeatNumber();
      metronome.updateBeatNumber();
      metronome.updateBeatNumber();
      metronome.updateBeatNumber();
      assert.equal(metronome.nextBeatNumber, 0)
    })
  });
});

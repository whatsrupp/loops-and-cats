'use strict';

var assert = require('assert')
var Metronome = require('../../public/scripts/metronome.js')

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
  });

  describe('scheduler', function(){

  });

  describe('play', function(){

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

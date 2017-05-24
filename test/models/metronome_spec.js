'use strict';

var assert = require('assert')
var Metronome = require('../../public/scripts/metronome.js')

describe('Metronome Model', function(){

  describe('variables', function(){
  });

  describe('bufferAudio', function(){

  });

  describe('scheduleNote', function(){

  });

  describe('scheduler', function(){

  });

  describe('play', function(){

  });

  describe('init', function(){

  });

  describe('nextNote', function(){
    it('increments the beat', function(){
      metronome.nextNote();

    });
  });

  describe('updateBeatNumber', function() {
    it('it increments beat number', function(){
      var metronome = new Metronome.Metronome();
      var initialBeatNumber = metronome.currentBeatNumber
      metronome.updateBeatNumber();
      assert.equal(metronome.currentBeatNumber, initialBeatNumber + 1)
    });
    it('wraps the beat at the end of the bar', function() {
      var metronome = new Metronome.Metronome();
      metronome.updateBeatNumber();
      metronome.updateBeatNumber();
      metronome.updateBeatNumber();
      metronome.updateBeatNumber();
      assert.equal(metronome.currentBeatNumber, 0)
    })
  });
});

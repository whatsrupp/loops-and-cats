'use strict';

var assert = require('assert')
var LoopFactory = require('../../public/scripts/models/loopFactory.js')
var chai = require("chai")
var sinonChai = require("sinon-chai")
var expect = require('chai').expect
var wavemaker = require('../../public/scripts/models/waveMaker.js')
chai.use(sinonChai)

describe('Loop Factory Model', function(){

  describe('loops', function(){
    it('initializes as an empty storage', function(){
      var loopFactory = new LoopFactory.LoopFactory();
      // assert.equal(loopFactory.loops, [])
      expect(loopFactory.loops).to.be.empty;
    });
  });

  describe('create', function(){
    it('creates a new loop prototype and stores it in loops', function(){
      var loopFactory = new LoopFactory.LoopFactory();
    });
  });
});

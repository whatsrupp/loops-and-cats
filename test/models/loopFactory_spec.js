'use strict';

var assert = require('assert')
var LoopFactoryModule = require('../../public/scripts/models/loopFactory.js');
var LoopFactory = LoopFactoryModule.LoopFactory;
var chai = require("chai");
var sinonChai = require("sinon-chai");
var expect = require('chai').expect;
var wavemaker = require('../../public/scripts/models/waveMaker.js');
chai.use(sinonChai)

describe('Loop Factory Model', function(){

  describe('loops', function(){
    it('initializes as an empty storage', function(){
      var loopFactory = new LoopFactory();
      expect(loopFactory.loops).to.be.empty;
    });
  });

  describe('isNotEmpty', function(){
    it('returns false if there are loops in the factory', function(){
      var loopFactory = new LoopFactory();
      loopFactory.loops.push('DummyLoop')
      expect(loopFactory.isNotEmpty()).to.equal(true)
    });
  });

  describe('create', function(){
    it('creates a new loop prototype and stores it in loops', function(){
      var loopFactory = new LoopFactory();
    });
  });
});

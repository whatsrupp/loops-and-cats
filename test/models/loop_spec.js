'use strict';

var assert = require('assert')
var Loop = require('../../public/scripts/models/loop.js')
var chai = require("chai")
var sinonChai = require("sinon-chai")
var expect = require('chai').expect
chai.use(sinonChai)
var dummyWaveObject = []
var dummyWaveMaker = {
  createWave: function (){return dummyWaveObject}
}
// var dummyWaveMaker = { createWave: function() { return dummyWaveObject; } };
var dummyURL = "thisisaurl.com";

describe('loop model', function() {

  describe('initialize', function() {

    it('is has a URL on initialization', function() {
      var loop = new Loop.Loop(dummyURL, dummyWaveMaker);
      expect(loop.url).to.equal(dummyURL);
    });

    it('creates a waveform object using URL', function() {

    })
  });

  describe('updateIsActive', function() {
    var loop = new Loop.Loop(dummyURL, dummyWaveMaker);
    loop.updateIsActive();
    expect(loop.isActive).to.be.false;
  });

})

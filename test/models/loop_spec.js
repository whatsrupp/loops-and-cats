'use strict';

var assert = require('assert')
var Loop = require('../../public/scripts/models/loop.js')
var chai = require("chai")
var sinonChai = require("sinon-chai")
var expect = require('chai').expect
chai.use(sinonChai)


describe('loop model', function() {

  describe('initialize', function() {

    it('is has a URL on initialization', function() {
      var uRL = "thisisaurl.com";
      var loop = new Loop.Loop(uRL);
      expect(loop.url).to.equal(uRL);
    });

    it('creates a waveform object using URL', function() {

    })
  });

  describe('updateIsActive', function() {
    var loop = new Loop.Loop();
    loop.updateIsActive();
    expect(loop.isActive).to.be.false;
  });

})

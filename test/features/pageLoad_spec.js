// // force the test environment to 'test'
// process.env.NODE_ENV = 'test';
// // get the application server module
// var app = require('../../index');
// var Browser = require('zombie')
// var assert = require('assert') //Inbuilt node assertations model
// describe('contact page', function() {
//   before(function() {
//     this.server = app.listen(3000);
//     this.browser = new Browser({site: 'http://localhost:3000'})
//   });
//
//   before(function(done) {
//     this.browser.visit('/', done);
//   });
//   it ('sould test the headless browser is working correctly', function(){
//     assert.ok(this.browser.success);
//   });
//
//   it ('should have 8 empty loop tracks', function(){
//     this.browser.assert.elements('#audio-track', 8);
//   });
//
//   it ('should have a record button', function(){
//     this.browser.assert.elements('#record-button', 1);
//   });
//
//   it('should have a logo', function(){
//     this.browser.assert.elements('#logo', 1);
//   });
//
//   it('should have an about link', function(){
//     this.browser.assert.elements('#about-link', 1);
//   });
//
//   after(function(done) {
//     this.server.close(done);
//   });
// });

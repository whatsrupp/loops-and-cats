describe('LoopFactory', function() {
  var loopFactory;
  beforeEach(function(){
    loopFactory = new LoopFactory();
  });

  it('is initialized with no loops', function() {
    expect(loopFactory.loops).toEqual([]);
  });
})

(function(exports){

  function LoopFactory(){
    this.loops = []
  }

  function create(audioSrc){
    this.loops.push(new Loop(audioSrc))
  }


  exports.LoopFactory = LoopFactory;
})(this);

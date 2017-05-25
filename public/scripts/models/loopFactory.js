(function(exports){

  function LoopFactory(){
    this.loops = []
    this.create = function(audioSrc){
      this.loops.push(new Loop(audioSrc, waveMaker))
    }
  }



  exports.LoopFactory = LoopFactory;
})(this);

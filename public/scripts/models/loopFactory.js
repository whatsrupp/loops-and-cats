(function(exports){

  function LoopFactory(){
    this.loops = []
    this.create = function(audioSrc){
      this.loops.push(new Loop(audioSrc, waveMaker))
    }

    this.isNotEmpty = function(){
      return this.loops.length > 0;
    }
  }



  exports.LoopFactory = LoopFactory;
})(this);

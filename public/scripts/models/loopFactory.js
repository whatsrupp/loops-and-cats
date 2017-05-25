(function(exports){

  function LoopFactory(){
    this.loops = [];

    this.create = function(audioSrc, number){
      this.loops.push(new Loop(audioSrc, waveMaker, number))
    }

    this.isNotEmpty = function(){
      return this.loops.length > 0;
    }
  }



  exports.LoopFactory = LoopFactory;
})(this);

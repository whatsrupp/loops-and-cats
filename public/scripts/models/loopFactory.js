(function(exports){

  function LoopFactory(){
    this.loops = [];

    this.create = function(audioSrc, number){
      this.loops.push(new Loop(audioSrc, waveMaker, number))
    }

    this.isNotEmpty = function(){
      return this.loops.length > 0;
    }

    this.updateLoops = function(uRL){
      var index;
      for(var i = 0; i < 8; i++){
        if(this.loops[i].url === 'audio/Silence.ogg'){
          index = i;
          break
        }
      }
      this.loops[index].url = uRL;
      this.loops[index].waveform.load(uRL);
    }

    this.isFull = function() {
      var count = 0;
      for(var i = 0; i < 8; i++){
        if(this.loops[i].url != 'audio/Silence.ogg'){
          count += 1;
        };
      };
      if (count == 8) {return true};
    };
  }
  exports.LoopFactory = LoopFactory;
})(this);

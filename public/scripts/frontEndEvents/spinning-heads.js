(function(exports){

  function SpinningHeads(){

    this.startSpin = function(loopFactory) {
      if(loopFactory.fullTrackCount() > 0) {
        for(var i = 1; i <= 5; i++) {
          $('#image' + i.toString()).addClass("headson");
        }
      }
    }

    this.stopSpin = function(loopFactory) {
      for(var i = 1; i <= 5; i++) {
        if(loopFactory.fullTrackCount() === 0) {
          $('#image' + i.toString()).removeClass("headson");
        }
      }
    }
  }
  exports.SpinningHeads = SpinningHeads;

})(this)

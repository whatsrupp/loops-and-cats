(function(exports){

  function Loop(url){
    this.isActive = true;
    this.url = url;

    this.updateIsActive = function() {
      this.isActive = !this.isActive;
    }
  }


  exports.Loop = Loop;
})(this);

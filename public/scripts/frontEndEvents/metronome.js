(function(exports){
  var metronomeButton = $('#metronomeButton');

  initializeMetronomeButton = function(){
      metronomeButton.click(function(){
        toggleMetronomeState();
    });
  }

  toggleMetronomeState = function (){
    scheduler.metronomeOn = !scheduler.metronomeOn;
  }

})(this)

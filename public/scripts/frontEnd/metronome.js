(function(exports){
  var metronomeButton = $('#metronomeButton');

  initializeMetronomeButton = function(){
      metronomeButton.click(function(){
        toggleMetronomeState();
    });
  }

  toggleMetronomeState = function (){
    metronomeOn = !metronomeOn;
  }

})(this)

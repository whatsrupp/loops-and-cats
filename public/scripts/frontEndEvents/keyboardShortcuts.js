(function(exports){

  initializeKeyboardShortcuts = function() {
    initializeKeys();
  }

  initializeKeys = function() {
    $(document).ready(function(){
    window.addEventListener("keypress", keyToggleMute, false);
  });
}

  function keyToggleMute(e){
    var keyCode = e.keyCode;
    if(keyCode == 49){
      loopFactory.loops[0].toggleMuteState();
    } else if(keyCode == 50) {
      loopFactory.loops[1].toggleMuteState();
    } else if(keyCode == 51) {
      loopFactory.loops[2].toggleMuteState();
    } else if(keyCode == 52) {
      loopFactory.loops[3].toggleMuteState();
    } else if(keyCode == 53) {
      loopFactory.loops[4].toggleMuteState();
    } else if(keyCode == 54) {
      loopFactory.loops[5].toggleMuteState();
    } else if(keyCode == 55) {
      loopFactory.loops[6].toggleMuteState();
    } else if(keyCode == 56) {
      loopFactory.loops[7].toggleMuteState();
    }
  };

exports.initializeKeyboardShortcuts = initializeKeyboardShortcuts;

})(this)

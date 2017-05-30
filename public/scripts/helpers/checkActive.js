(function(exports){

  checkActive = function() {
    muteButtons = document.getElementsByClassName('muteButton')
    for (var i = 0; i < muteButtons.length; i++) {
      if (!loopFactory.loops[i].isActive) {
        $('span:first', muteButtons[i]).prop('class', 'glyphicon glyphicon-volume-off');
      } else {
        $('span:first', muteButtons[i]).prop('class', 'glyphicon glyphicon-volume-up');
      }
    }
  }
  exports.checkActive = checkActive;
})(this);

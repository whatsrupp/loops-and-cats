(function(exports){

  checkActive = function() {
    var soloButtons = document.getElementsByClassName('soloButton');
    muteButtons = document.getElementsByClassName('muteButton')
    for (var i = 0; i < muteButtons.length; i++) {
      if (!loopFactory.loops[i].isActive) {
        $('span:first', muteButtons[i]).prop('class', 'glyphicon glyphicon-volume-off');
        $(soloButtons[i]).css({ 'color': '#e3e3e3'});
      } else {
        $('span:first', muteButtons[i]).prop('class', 'glyphicon glyphicon-volume-up');
      }
    }
  }
  exports.checkActive = checkActive;
})(this);

(function(exports){

  var recordingButton = $('#recording-button')

  activateRecordOnVisuals = function(){
    recordingButton.removeClass("notRec");
    recordingButton.addClass("Rec");

  }

  activateRecordOffVisuals = function(){
    recordingButton.removeClass("Rec");
    recordingButton.addClass("notRec");
    recordingButton.prop('disabled', false);
  }

  initializeRecordButton = function(){

    recordingButton.click(function() {
      if (loopFactory.isFull()){
        alert("No free loops: please delete one and try again!")
      } else {
        isRecording = !isRecording
        recordingButton.prop('disabled', true);
      }
    });
  }
  exports.initializeRecordButton = initializeRecordButton
  exports.activateRecordOffVisuals = activateRecordOffVisuals
  exports.activateRecordOnVisuals = activateRecordOnVisuals
})(this)

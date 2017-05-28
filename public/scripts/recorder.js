(function(exports){

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  var urls = [];
  var mediaType = { audio: true}
  var mediaRecorder = null;
  onError = function(err) {
    console.log("The following getUserMedia error occured: " + err + ". That is not nice, eh?");
  }
  onSuccess = function(stream) {
    $('#recording-button').removeClass("notRec");
    $('#recording-button').addClass("Rec");
    loopFactory.activateInputVisualiser();
    microphone.start();
    mediaRecorder = new MediaRecorder(stream);
    var chunks = [];
    mediaRecorder.start();
    console.log(mediaRecorder.state); // logs 'recording' in the console

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    };

    // stops recording and currently pushes to urls array
    mediaRecorder.onstop = function(e) {
      var blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
      console.log(chunks);
      chunks = [];
      var audioURL = window.URL.createObjectURL(blob);
      loopFactory.updateLoops(audioURL);
      spinningHeads.startSpin(loopFactory);
    };
  }
  stopRecording = function() {
    microphone.stop();
    mediaRecorder.stop();
    console.log(mediaRecorder.state); // logs 'inactive' in the console
    $('#recording-button').removeClass("Rec");
    $('#recording-button').addClass("notRec");
    document.getElementById('recording-button').disabled = false;
  };

  activateRecording = function(){
    if (navigator.getUserMedia) {
      console.log("getUserMedia supported! Nice eh?");
      navigator.getUserMedia(mediaType, onSuccess, onError)
    } else {
      console.log("getUserMedia not supported on your browser");
    }
  }
  exports.activateRecording = activateRecording;
  exports.stopRecording = stopRecording;
})(this)

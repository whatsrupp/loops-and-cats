(function(exports){

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  var urls = [];
  var mediaRecorder = null;
  var chunks = [];

  openRecordingStream = function(){
    var mediaType = { audio: true }
    if (navigator.getUserMedia) {
      console.log("getUserMedia supported! Nice eh?");
      navigator.getUserMedia(mediaType, onSuccess, onError)
    } else {
      console.log("getUserMedia not supported on your browser");
    }
  }

  onSuccess = function(stream) {
    mediaRecorder = new MediaRecorder(stream);
    initializeOnDataAvailableEvent();
    initializeStopRecordingEvent();
  };

  initializeOnDataAvailableEvent = function(){

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    };
  }
  onError = function(err) {
    console.log("The following getUserMedia error occured: " + err + ". That is not nice, eh?");
  }

  startRecording = function(){
    microphone = Object.create(WaveSurfer.Microphone);
    loopFactory.activateInputVisualiser();
    microphone.start();
    mediaRecorder.start();
    activateRecordOnVisuals()
    console.log(mediaRecorder.state); // logs 'recording' in the console
  }


  initializeStopRecordingEvent = function(){
    mediaRecorder.onstop = function(e) {
      var blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
      console.log(chunks);
      chunks = [];
      var audioURL = window.URL.createObjectURL(blob);
      loopFactory.updateLoops(audioURL);
      spinningHeads.startSpin(loopFactory);
    }
  }

  stopRecording = function() {
    microphone.stop();
    mediaRecorder.stop();
    activateRecordOffVisuals()
  };

  exports.openRecordingStream = openRecordingStream;
  exports.startRecording = startRecording;
  exports.stopRecording = stopRecording;
})(this)

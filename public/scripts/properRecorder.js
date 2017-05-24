navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var record = document.querySelector('.record');
var urls = [];
var mediaType = { audio: true}
onError = function(err) {
  console.log("The following getUserMedia error occured: " + err + ". That is not nice, eh?");
}
onSuccess = function(stream) {
  var mediaRecorder = new MediaRecorder(stream);
  var chunks = [];

  record.onclick = function() {
    mediaRecorder.start();
    console.log(mediaRecorder.state); // logs 'recording' in the console
    console.log("Recorder started");
    // Might be css:
    record.style.background = 'red';
    record.style.color = 'black';
    setTimeout(function(){stopRecording()}, 2000)
  };

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  };

  stopRecording = function() {
    mediaRecorder.stop();
    console.log(mediaRecorder.state); // logs 'inactive' in the console
    console.log("Recorder stopped");
    record.style.background = '';
    record.style.color = '';
  };

  // stops recording and currently pushes to urls array
  mediaRecorder.onstop = function(e) {
    console.log("Recorder stopped!");

    var blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
    console.log(chunks);
    chunks = [];
    var audioURL = window.URL.createObjectURL(blob);
    urls.push(audioURL);
  };
}


if (navigator.getUserMedia) {
  console.log("getUserMedia supported! Nice eh?");
  navigator.getUserMedia(mediaType, onSuccess, onError)
} else {
  console.log("getUserMedia not supported on your browser");
}

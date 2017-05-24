// This line will let the code work regardless of browser
// firefox, chrome but not safari
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var record = document.querySelector('.record');
var stop = document.querySelector('.stop');
var soundClips = document.querySelector('.sound-clips');
var urls = [];


(function(exports){

  var waveSurfers = [];

  for (var i = 1; i <= 8; i++){
    var waveTest = WaveSurfer.create({
      container: '#waveform' + i,
      waveColor: 'violet',
      progressColor: 'purple'
    });
    waveTest.load('/audio/myRecording01.wav');
    waveSurfers.push(waveTest)
  }

  exports.waveTest = waveTest;
  exports.waveSurfers = waveSurfers;

})(this)
//
// firstEmptyWaveform = function() {
//
// }

if (navigator.getUserMedia) {
  console.log("getUserMedia supported! Nice eh?");
  navigator.getUserMedia (
    {
      audio: true
    },
    // Success callback
    function(stream) {
      var mediaRecorder = new MediaRecorder(stream);

      record.onclick = function() {
        mediaRecorder.start();
        console.log(mediaRecorder.state); // logs 'recording' in the console
        console.log("Recorder started");
        // Might be css:
        record.style.background = 'red';
        record.style.color = 'black';
      };

      var chunks = [];

      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      };

      stop.onclick = function() {
        mediaRecorder.stop();
        console.log(mediaRecorder.state); // logs 'inactive' in the console
        console.log("Recorder stopped");
        record.style.background = '';
        record.style.color = '';
      };

      // what is going on in this method below????????!?!?!?!?!
      mediaRecorder.onstop = function(e) {
        console.log("Recorder stopped!");

        var blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
        console.log(chunks);
        chunks = [];
        var audioURL = window.URL.createObjectURL(blob);
        urls.push(audioURL);


      //   var sourceToAudio = function() {
      //     var placeHolder;
      //       for(var i = 1; i <= 8; i++) {
      //         placeHolder = 'waveform' + i.toString();
      //         console.log(placeHolder)
      //         console.log(document.getElementById(placeHolder))
      //         if(document.getElementById(placeHolder).innerHTML === ''){
      //         //  debugger;
      //           wavesurfer1 = WaveSurfer.create({
      //             container: '#' + placeHolder,
      //             waveColor: 'violet',
      //             progressColor: 'purple'
      //           });
      //         };
      //       }
      //       wavesurfer1.load(audioURL);
      //       wavesurfer1.on('ready', function() {
      //         debugger;
      //         wavesurfer1.play();
      //       });
      // }
      //   sourceToAudio();

document.getElementsByClassName('1')[0].onclick = function(){document.getElementById('1').src = ''}
document.getElementsByClassName('2')[0].onclick = function(){document.getElementById('2').src = ''}
document.getElementsByClassName('3')[0].onclick = function(){document.getElementById('3').src = ''}
document.getElementsByClassName('4')[0].onclick = function(){document.getElementById('4').src = ''}
document.getElementsByClassName('5')[0].onclick = function(){document.getElementById('5').src = ''}
document.getElementsByClassName('6')[0].onclick = function(){document.getElementById('6').src = ''}
document.getElementsByClassName('7')[0].onclick = function(){document.getElementById('7').src = ''}
document.getElementsByClassName('8')[0].onclick = function(){document.getElementById('8').src = ''}

      };
    },
    // Error callback
    function(err) {
      console.log("The following getUserMedia error occured: " + err + ". That is not nice, eh?");
    }
  );
} else {
  console.log("getUserMedia not supported on your browser");
}

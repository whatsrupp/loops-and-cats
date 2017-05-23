// This line will let the code work regardless of browser
// firefox, chrome but not safari
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var record = document.querySelector('.record');
var stop = document.querySelector('.stop');
var soundClips = document.querySelector('.sound-clips');


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
      }

      var chunks = [];

      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      }

      stop.onclick = function() {
        mediaRecorder.stop();
        console.log(mediaRecorder.state); // logs 'inactive' in the console
        console.log("Recorder stopped");
        record.style.background = '';
        record.style.color = '';
      }

      // what is going on in this method below????????!?!?!?!?!
      mediaRecorder.onstop = function(e) {
        console.log("Recorder stopped!");

        // var clipName = prompt('Enter a name for dis loop brooo');

        // var clipContainer = document.createElement('article');
        // var clipLabel = document.createElement('p');
        // var audio = document.createElement('audio');
        // var deleteButton = document.createElement('button');

        // clipContainer.classList.add('clip');
        // audio.setAttribute('controls', '');
        // deleteButton.innerHTML = 'Delete';
        // clipLabel.innerHTML = clipName;

        // clipContainer.appendChild(audio);
        // clipContainer.appendChild(clipLabel);
        // clipContainer.appendChild(deleteButton);
        // soundClips.appendChild(clipContainer);

        var blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
        console.log(chunks);
        chunks = [];
        var audioURL = window.URL.createObjectURL(blob);
        // audio.src = audioURL;

        if (document.getElementById('1').src === "http://localhost:6969/") {
        document.getElementById('1').src = audioURL;
      } else if (document.getElementById('2').src === "http://localhost:6969/") {
      document.getElementById('2').src = audioURL
    } else if (document.getElementById('3').src === "http://localhost:6969/") {
    document.getElementById('3').src = audioURL
  } else if (document.getElementById('4').src === "http://localhost:6969/") {
  document.getElementById('4').src = audioURL
} else if (document.getElementById('5').src === "http://localhost:6969/") {
document.getElementById('5').src = audioURL
} else if (document.getElementById('6').src === "http://localhost:6969/") {
document.getElementById('6').src = audioURL
} else if (document.getElementById('7').src === "http://localhost:6969/") {
document.getElementById('7').src = audioURL
} else if (document.getElementById('8').src === "http://localhost:6969/") {
document.getElementById('8').src = audioURL
}

document.getElementsByClassName('1')[0].onclick = function(){document.getElementById('1').src = ''}
document.getElementsByClassName('2')[0].onclick = function(){document.getElementById('2').src = ''}
document.getElementsByClassName('3')[0].onclick = function(){document.getElementById('3').src = ''}
document.getElementsByClassName('4')[0].onclick = function(){document.getElementById('4').src = ''}
document.getElementsByClassName('5')[0].onclick = function(){document.getElementById('5').src = ''}
document.getElementsByClassName('6')[0].onclick = function(){document.getElementById('6').src = ''}
document.getElementsByClassName('7')[0].onclick = function(){document.getElementById('7').src = ''}
document.getElementsByClassName('8')[0].onclick = function(){document.getElementById('8').src = ''}


        // deleteButton.onclick = function(e) {
        //   var evtTgt = e.target;
        //   evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        // }
      }
    },
    // Error callback
    function(err) {
      console.log("The following getUserMedia error occured: " + err + ". That is not nice, eh?")
    }
  );
} else {
  console.log("getUserMedia not supported on your browser");
}

(function(exports) {


  function appendBuffer(buffer1, buffer2, buffer3) {
    var numberOfChannels = Math.min( buffer1.numberOfChannels, buffer2.numberOfChannels, buffer3.numberOfChannels );
    debugger;
    var tmp = audioContext.createBuffer( numberOfChannels, (buffer1.length + buffer2.length + buffer3.length), buffer1.sampleRate );
    for (var i=0; i<numberOfChannels; i++) {
      var channel = tmp.getChannelData(i);
      channel.set( buffer1.getChannelData(i), 0);
      channel.set( buffer2.getChannelData(i), buffer1.length);
      channel.set( buffer3.getChannelData(i), buffer1.length + buffer2.length);
    }

    debugger;
    return tmp;
  }

  function loadXHR(url, callback) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "arraybuffer";
      xhr.onerror = function() {console.log("Network error.")};
      xhr.onload = function() {
        if (xhr.status === 200) callback(xhr.response);
        else console.log("Loading error:" + xhr.statusText);
      };
      xhr.send();
    } catch (err) {console.log(err.message)}
  }
  var silentAudioBuffer = null;
  var recordedAudioBuffer = null;

  function decodeSilentAudio(buffer) {
    audioContext.decodeAudioData(buffer, function(buffer){
      silentAudioBuffer = buffer;
      loadXHR('audio/1234.mp3', decodeRecordedAudio)
    });
  };

  function decodeRecordedAudio(buffer) {
    audioContext.decodeAudioData(buffer, function(buffer) {
      debugger;
      recordedAudioBuffer = buffer;
      var audioSource = audioContext.createBufferSource();
      audioSource.buffer = appendBuffer(silentAudioBuffer, recordedAudioBuffer, silentAudioBuffer)

    })
  }

  function addSilenceToRecording(url) {
    loadXHR('audio/oneSecSilence.mp3', decodeSilentAudio)
    // loadXHR(url, decode)
  };

exports.addSilenceToRecording = addSilenceToRecording;
})(this);

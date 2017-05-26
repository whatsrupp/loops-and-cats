(function(exports){
  var buffer = null;

  function cueTrack(time){
    var source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(time)
  }

  function bufferTrack(){
    var audioUrl = loopFactory.loops[0].url
    var request = new XMLHttpRequest();

    request.open('GET', audioUrl, true);
    request.responseType = 'arraybuffer';
    request.onload = function(){
      audioContext.decodeAudioData(request.response, function(decodedAudio){
        buffer = decodedAudio;
      }, function (){
        console.log ('Error')
      });
    }
    request.send();
  }

  exports.bufferTrack = bufferTrack
  exports.cueTrack = cueTrack
})(this)

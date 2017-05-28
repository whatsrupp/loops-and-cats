(function(exports){
  var buffer = null;

  function cueActiveTracks(beatNumber, time){
    // bufferTrack();
    // cueTrack(time);

    // var loops = loopFactory.loops

    // for (i = 0; i < loops.length; i++) {
      function playWaveForms(){
        for(var i = 0; i < loopFactory.loops.length; i++){
          var loop = loopFactory.loops[i]
          loop.waveform.play()
        }
      }
      cueEvent(beatNumber, time, playWaveForms)
    // }
  }

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

  exports.cueActiveTracks = cueActiveTracks
})(this)

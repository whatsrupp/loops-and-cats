(function(exports){
  var buffer = null;

  function cueActiveTracks(beatNumber, time){
    // bufferTrack();
    // cueTrack(time);

    // var loops = loopFactory.loops

    // for (i = 0; i < loops.length; i++) {
      function playWaveForms(){
        loopFactory.loops[1].waveform.play()
        loopFactory.loops[2].waveform.play()
        loopFactory.loops[3].waveform.play()
        loopFactory.loops[4].waveform.play()
        loopFactory.loops[5].waveform.play()
        loopFactory.loops[6].waveform.play()
        loopFactory.loops[7].waveform.play()
        loopFactory.loops[0].waveform.play()
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

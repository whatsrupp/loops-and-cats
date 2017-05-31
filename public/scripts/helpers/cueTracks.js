(function(exports){
  var buffer = null;

  function cueActiveTracks(beatNumber, time){
      function playWaveForms(){
        for(var trackNumber = 0; trackNumber < loopFactory.loops.length; trackNumber++){
          var loop = loopFactory.loops[trackNumber]
          loop.waveform.play()
          connectBufferedTracksToMixRecorderMerger(trackNumber)
        }
      }
      cueFunction(beatNumber, time, playWaveForms)
  }

  function connectBufferedTracksToMixRecorderMerger(trackNumber){
    node = loopFactory.loops[trackNumber].waveform.backend.source
    node.connect(mixRecorder.merger, 0, trackNumber);
  }

  function cueTrack(time){
    // Buffers audio source with Web Audio Api
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

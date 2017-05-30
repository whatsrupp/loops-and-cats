(function(exports){
  var audio
  var merger;
  var splitter;
  var mixedAudio;
  var player = new Audio();

  var audioDownload;
  var recorder;
  var trackNodes = []
  var chunks = []

  getTrackNodes = function(){

    for(var i = 0; i < 8; i++){
      trackNodes.push(loopFactory.loops[i].waveform.backend.source)
    }
  }

  stopSaveMix = function(){
    mixRecorder.stop();
  }

  // startSaveMix = function(audioContext){
  //   audio = audioContext;
  //   // merger = audio.createChannelMerger(8);
  //   // mixedAudio = audio.createMediaStreamDestination();
  //   getTrackNodes();
  //
  //   for(var i = 0; i < trackNodes.length; i++){
  //     trackNodes[i].connect(merger, 0, i);
  //   }
  //   merger.connect(mixedAudio);
  //   merger.connect(audio.destination)
  //   recorder = new MediaRecorder(mixedAudio.stream);
  //   recorder.start();
  //
  //   recorder.ondataavailable = function(event) {
  //     chunks.push(event.data);
  //   };
  //
  //   recorder.onstop = function(event) {
  //     var blob = new Blob(chunks, {
  //       "type": "audio/ogg; codecs=opus"
  //     });
  //     audioDownload = URL.createObjectURL(blob);
  //     loopFactory.loops[0].updateURL(audioDownload)
  //     var a = document.createElement("a");
  //     var description = 'Wag2'
  //     a.download = description + "." + blob.type.replace(/.+\/|;.+/g, "");
  //     a.href = audioDownload;
  //     a.innerHTML = a.download;
  //     player.src = audioDownload;
  //     document.body.appendChild(a);
  //     document.body.appendChild(player);
  //   };
  //
  // }

  startSaveMix = function(){
    mixRecorder.start()

    mixRecorder.ondataavailable = function(event) {
      chunks.push(event.data);
    };

    mixRecorder.onstop = function(event) {
      var blob = new Blob(chunks, {
        "type": "audio/ogg; codecs=opus"
      });
      audioDownload = URL.createObjectURL(blob);
      loopFactory.loops[0].updateURL(audioDownload)
      var a = document.createElement("a");
      var description = 'Wag2'
      a.download = description + "." + blob.type.replace(/.+\/|;.+/g, "");
      a.href = audioDownload;
      a.innerHTML = a.download;
      player.src = audioDownload;
      document.body.appendChild(a);
      document.body.appendChild(player);
    };
  }

  // initializeSaveMixButton = function(){
  //   document.getElementById('save-mix-button').onClick = function(){
  //     saveMix();
  //     // Deactivate Button?
  //   }
  // }
  exports.startSaveMix = startSaveMix
  exports.stopSaveMix = stopSaveMix

})(this)

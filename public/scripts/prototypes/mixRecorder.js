(function(exports){

  const NumberOfLoopTracks = 8

  function MixRecorder(audioContext){
    this.audioContext = audioContext
    this.mixedAudio = audioContext.createMediaStreamDestination();
    this.merger = audioContext.createChannelMerger(NumberOfLoopTracks)
    this.chunks = []
    this.recorder = new MediaRecorder(this.mixedAudio.stream)
    this.isRecording = false;

    this.startRecording = function(){
      this.recorder.start();
      this.isRecording = true;
    }

    this.stopRecording = function(){
      this.recorder.stop();
      this.recording = false;
    }

    this.connectMergerWithRecorder = function(){
      this.merger.connect(this.mixedAudio)
    }

    this.connectMergerWithRecorder();
    // automatically connect the merger node with the Recorder
  }


  function prepareBlob (chunks){
    var blob = new Blob(chunks, {
      "type": "audio/ogg; codecs=opus"
    });
    blobURL = URL.createObjectURL(blob);
    return {url: blobURL, blob: blob}
  }

  generateDownloadLinkElement = function(downloadURL,blob){
    var player = new Audio();
    var downloadLink = document.createElement("a");
    var description = 'my-loop';
    downloadLink.download = description + "." + blob.type.replace(/.+\/|;.+/g, "");
    downloadLink.href = downloadURL;
    downloadLink.innerHTML = downloadLink.download;
    player.src = downloadURL;
    document.body.appendChild(downloadLink);
    document.body.appendChild(player);
  }

  initializeMixRecordingEvents = function(mixRecorder){
    mixRecorder.recorder.ondataavailable = function(event) {
      mixRecorder.chunks.push(event.data);
    };

    mixRecorder.recorder.onstop = function(event) {
      var blobInfo = prepareBlob(mixRecorder.chunks);
      var blob = blobInfo.blob
      var url = blobInfo.url
      console.log(blobInfo.blob)
      generateDownloadLinkElement(url,blob);
    };
  }

  initializeMixRecorder = function(mixRecorder){
    initializeMixRecordingEvents(mixRecorder);
    initializeSaveMixButton(mixRecorder);
    console.log('mix Recorder initialized successfully')
  }

  initializeSaveMixButton = function(mixRecorder){
    var recordMixButton = document.getElementById('record-mix-button')
    recordMixButton.onclick = function(){
      if (mixRecorder.isRecording) {
        console.log('Finished Mix Recording')

        mixRecorder.stopRecording()
      }else{
        mixRecorder.startRecording()
        console.log('Starting Mix Recording')
      }
    }
  }

  exports.initializeMixRecorder = initializeMixRecorder
  exports.MixRecorder = MixRecorder;

})(this)

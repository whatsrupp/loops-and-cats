(function(exports){

  initializeResponsiveWaveforms = function(){
    window.onresize = function(event) {
      var elementName;
      var waveformFrame;
      var wavesurfer;
      for(var i = 0; i < 8; i++) {
        elementName = "waveform"+(i+1)
        waveformFrame = document.getElementById(elementName)
        wavesurfer = loopFactory.loops[i].waveform
        wavesurfer.params.height = (waveformFrame.offsetHeight); //30px is the time code height, may different in your environment
        wavesurfer.drawer.setHeight(waveformFrame.offsetHeight);
        wavesurfer.drawBuffer();
      }
    };
  }

  exports.initializeResponsiveWaveforms = initializeResponsiveWaveforms
})(this)

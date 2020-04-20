//Reference - https://wavesurfer-js.org/

var wavesurfer = WaveSurfer.create({ 
  container: '#waveform', 
  waveColor: 'purple',
  barWidth: 2,
  barHeight: 1, // the height of the wave
  barGap: null
});

wavesurfer.load('rainbow.mp3');


// Remove comment for a seconds based timeline

/* wavesurfer.on('ready', function () {
  var timeline = Object.create(WaveSurfer.Timeline);

  timeline.init({
    wavesurfer: wavesurfer,
    container: '#waveform-timeline'
  });
}); */

// We can use the original code to recoed, If not then there is a Microphone plugin, found here - https://unpkg.com/wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js
// Code for microphone is simple, a skeleton is below and also at (https://wavesurfer-js.org/example/microphone/index.html)

/* wavesurfer.microphone.on('deviceReady', function(stream) {
  console.log('Device ready!', stream);
});
wavesurfer.microphone.on('deviceError', function(code) {
  console.warn('Device error: ' + code);
});

// start the microphone
wavesurfer.microphone.start();

// pause rendering
//wavesurfer.microphone.pause();

// resume rendering
//wavesurfer.microphone.play();

// stop visualization and disconnect microphone
//wavesurfer.microphone.stopDevice();

// same as stopDevice() but also clears the wavesurfer canvas
//wavesurfer.microphone.stop();

// destroy the plugin
//wavesurfer.microphone.destroy(); */
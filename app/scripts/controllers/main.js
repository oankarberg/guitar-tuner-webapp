'use strict';

/**
 * @ngdoc function
 * @name guitarTunerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guitarTunerAppApp
 */
angular.module('guitarTunerAppApp')
  .controller('MainCtrl', function ($scope, $timeout, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  var numTicks = 10;
  var dialDegrees = 45;
  $scope.timer = "Pausad"


  window.addEventListener('load', function(){
    var $tunerViewContainer = $("#tunerView");
    for (var i = 1; i <= numTicks; i++) {
      var $div = $("<div>", {id: "tick_"+i});
      $tunerViewContainer.append($div);
      var $div = $("<div>", {id: "tick_"+(-1)*i});
      $tunerViewContainer.append($div);
    };
  }); 

  var timerInterval;

  function play()
  {
    var div = document.getElementById("playPause");
    div.className = "pause";
    startAudio();
    startClock();
    $scope.playing = true;
  }


  function pause()
  {
    var div = document.getElementById("playPause");
    div.className = "play";
    stopAudio();
    $scope.playing = false;
    // var message = $("#message");
    // message.text("Paused: Click Play to continue");
    $scope.timer = "Pausad"
    clearInterval(timerInterval);
  }
  $scope.playPause = function ()
  {
    
    if($scope.playing == true)
    {
      pause();
    }
    else
    {
      play();
    }
  }

  function startClock()
  {
    var timeoutLengthSeconds = 5*60;
    var start = new Date;
    $scope.updateClock(timeoutLengthSeconds);
      timerInterval = setInterval(function() {
          var secondsPassed = (new Date - start)/1000;
          if(secondsPassed < timeoutLengthSeconds)
          {
            $scope.updateClock(timeoutLengthSeconds-secondsPassed);
          }
          else
          {
            pause();
          }
      }, 1000);
  }

  $scope.updateClock = function(timeoutLengthSeconds)
  {
    function formatNumberLength(num, length) {
        var r = "" + num;
        while (r.length < length) {
            r = "0" + r;
        }
        return r;
    }
    var minutes = Math.floor(timeoutLengthSeconds / 60);
    var seconds = Math.floor(timeoutLengthSeconds%60);
    //Kallar onTimeout för att $scope.timer ska uppdateras i DOM
    $scope.onTimeout = function(){
        mytimeout = $timeout($scope.onTimeout,100);
        $scope.timer = formatNumberLength(minutes,2)+":"+formatNumberLength(seconds,2);
    }
    var mytimeout = $timeout($scope.onTimeout,100);
    
    // var clock = document.getElementById("#message").text("Timeout: "+formatNumberLength(minutes,2)+":"+formatNumberLength(seconds,2));
  }

  function updateTuner(noteIndex, noteError) 
  {
    //TODO: Assert params
    if(!(noteIndex && noteError) || !(noteIndex > 0 && noteIndex <12) || !(noteError > -50 && noteError < 50))
      return;

    var sharpHtml = '<sup class="sharp">#</sup>';
    var notes = ['C','C'+sharpHtml,'D','D'+sharpHtml,'E','F','F'+sharpHtml,'G','G'+sharpHtml,'A','A'+sharpHtml,'B'];
    var needle = document.getElementById("needle2");

    var degrees = noteError*2.0*dialDegrees;
    needle.style.webkitTransform = 'rotate('+degrees+'deg)';
    needle.style.MozTransform = 'rotate('+degrees+'deg)';

    var noteView = document.getElementById("noteView");
    noteView.innerHTML = notes[noteIndex];

    //var body = document.getElementsByTagName("body")[0];

    if (Math.abs(noteError) < 0.05)
    {
      var tip = document.getElementById("tip");
      var tick = document.getElementById("tick_0");
      tip.className = "tipHighlighted";
      tick.className = "tick_0_highlighted";
    }
    else
    {
      var tip = document.getElementById("tip");
      var tick = document.getElementById("tick_0");
      tip.className = "tipNormal";
      tick.className = "tick_0_normal";
    }
    
  }
    //Copyright Tom Hoddes 2014 http://freetuner.co 
  var audioContext = new AudioContext();
  var inputStreamNode = null,
      gainNode = null;

  function getMaxPeak(inputVector,numFreq)
  {
      numFreq = typeof numFreq !== 'undefined' ? numFreq : 2000;

      var vec1 = inputVector;
      var vec2 = [], vec3 = [], vec4 = [], vec5 = [];
  
      //console.log(vec1);

      for(var i = 0; i < numFreq; i++)
      {
        if(i%2 === 0)
          vec2.push(inputVector[i]);      
        if(i%3 === 0)
          vec3.push(inputVector[i]);
        if(i%4 === 0)
          vec4.push(inputVector[i]);
        if(i%5 === 0)
          vec5.push(inputVector[i]);
      }

      var zeroArray = [];
      var length = 0;
      //Temp solution. want to add exact zeros
      while(length < 2000)
      {
        zeroArray.push(0);
        length++;
      }
      vec2.concat(zeroArray);
      vec3.concat(zeroArray);
      vec4.concat(zeroArray);
      vec5.concat(zeroArray);

      var sp1 = document.getElementById("sp_1");
      var sp2 = document.getElementById("sp_2");
      var sp3 = document.getElementById("sp_3");
      var sp4 = document.getElementById("sp_4");
      var sp5 = document.getElementById("sp_5");
      var sp6 = document.getElementById("sp_6");
      var sp7 = document.getElementById("sp_7");
      var sp8 = document.getElementById("sp_8");
      var sp9 = document.getElementById("sp_9");
      var sp10 = document.getElementById("sp_10");
      var sp11 = document.getElementById("sp_11");
      var sp12 = document.getElementById("sp_12");
      var sp13 = document.getElementById("sp_13");
      var sp14 = document.getElementById("sp_14");
      var sp15 = document.getElementById("sp_15");
      var sp16 = document.getElementById("sp_16");
      var sp17 = document.getElementById("sp_17");
      var sp18 = document.getElementById("sp_18");
      var sp19 = document.getElementById("sp_19");
      var sp20 = document.getElementById("sp_20");
      var sp21 = document.getElementById("sp_21");
      var sp22 = document.getElementById("sp_22");
      var sp23 = document.getElementById("sp_23");
      var sp24 = document.getElementById("sp_24");
      var sp25 = document.getElementById("sp_25");
      var sp26 = document.getElementById("sp_26");
      var sp27 = document.getElementById("sp_27");
      var sp28 = document.getElementById("sp_28");
      var sp29 = document.getElementById("sp_29");
      var sp30 = document.getElementById("sp_30");
      var sp31 = document.getElementById("sp_31");
      var sp32 = document.getElementById("sp_32");
      var sp33 = document.getElementById("sp_33");
      var sp34 = document.getElementById("sp_34");
      var sp35 = document.getElementById("sp_35");
      var sp36 = document.getElementById("sp_36");
      var sp37 = document.getElementById("sp_37");
      var sp38 = document.getElementById("sp_38");
      var sp39 = document.getElementById("sp_39");
      var sp40 = document.getElementById("sp_40");



      
      





      var SumVec = [];
      for(var i = 0; i < numFreq; i++)
      {
        SumVec[i] = vec1[i] + vec2[i] +  vec3[i] + vec4[i] + vec5[i];
      }


      
      var peakMax = 0;
      var peakMaxInd = 0;
      var size = inputVector.length * 2;
      var whichStaple = 0;
      var vecAverageAmp = [];
      var sum = 0;

      

      for(var i=7;i<numFreq;i++)
      {
          // console.log('inputVector ' , inputVector[i]);
          var amplitude = inputVector[i];
          sum += inputVector[i];
          if(i%25 === 0 && i < 1000) 
          {
            vecAverageAmp.push((sum/25));
            whichStaple++;
            sum = 0;

          }
          
          if(amplitude>peakMax)
          {
              peakMax=amplitude;
              peakMaxInd=i;
          }

      }
      // console.log('vecAverageAmp ' , vecAverageAmp);
       sp1.style.height = '' + 50*vecAverageAmp[0] +'px';
       sp2.style.height = '' + 50*vecAverageAmp[1] +'px';
       sp3.style.height = '' + 50*vecAverageAmp[2] +'px';
       sp4.style.height = '' + 50*vecAverageAmp[3] +'px';
       sp5.style.height = '' + 50*vecAverageAmp[4] +'px';
       sp6.style.height = '' + 50*vecAverageAmp[5] +'px';
       sp7.style.height = '' + 50*vecAverageAmp[6] +'px';
       sp8.style.height = '' + 50*vecAverageAmp[7] +'px';
       sp9.style.height = '' + 50*vecAverageAmp[8] +'px';
       sp10.style.height  = '' + 50*vecAverageAmp[9] + 'px';
       sp11.style.height  = '' + 50*vecAverageAmp[10] + 'px';
       sp12.style.height  = '' + 50*vecAverageAmp[11] + 'px';
       sp13.style.height  = '' + 50*vecAverageAmp[12] + 'px';
       sp14.style.height  = '' + 50*vecAverageAmp[13] + 'px';
       sp15.style.height  = '' + 50*vecAverageAmp[14] + 'px';
       sp16.style.height  = '' + 50*vecAverageAmp[15] + 'px';
       sp17.style.height  = '' + 50*vecAverageAmp[16] + 'px';
       sp18.style.height  = '' + 50*vecAverageAmp[17] + 'px';
       sp19.style.height  = '' + 50*vecAverageAmp[18] + 'px';
       sp20.style.height  = '' + 50*vecAverageAmp[19] + 'px';
       sp21.style.height  = '' + 50*vecAverageAmp[20] + 'px';
       sp22.style.height  = '' + 50*vecAverageAmp[21] + 'px';
       sp23.style.height  = '' + 50*vecAverageAmp[22] + 'px';
       sp24.style.height  = '' + 50*vecAverageAmp[23] + 'px';
       sp25.style.height  = '' + 50*vecAverageAmp[24] + 'px';
       sp26.style.height  = '' + 50*vecAverageAmp[25] + 'px';
       sp27.style.height  = '' + 50*vecAverageAmp[26] + 'px';
       sp28.style.height  = '' + 50*vecAverageAmp[27] + 'px';
       sp29.style.height  = '' + 50*vecAverageAmp[28] + 'px';
       sp30.style.height  = '' + 50*vecAverageAmp[29] + 'px';
       sp31.style.height  = '' + 50*vecAverageAmp[30] + 'px';
       sp32.style.height  = '' + 50*vecAverageAmp[31] + 'px';
       sp33.style.height  = '' + 50*vecAverageAmp[32] + 'px';
       sp34.style.height  = '' + 50*vecAverageAmp[33] + 'px';
       sp35.style.height  = '' + 50*vecAverageAmp[34] + 'px';
       sp36.style.height  = '' + 50*vecAverageAmp[35] + 'px';
       sp37.style.height  = '' + 50*vecAverageAmp[36] + 'px';
       sp38.style.height  = '' + 50*vecAverageAmp[37] + 'px';
       sp39.style.height  = '' + 50*vecAverageAmp[38] + 'px';
       sp40.style.height  = '' + 50*vecAverageAmp[39] + 'px';


      return {"peakInd":peakMaxInd,"peakAmp":peakMax};
  }

  //MAIN

  var scriptProcessorNode;
  var audioWindowSize = 65536;
  var audioWindow = new Float32Array(audioWindowSize);
  var audioWindowProcessed = new Float32Array(audioWindowSize);
  var hammingWindowFilter = new Float32Array(audioWindowSize);
  var sampleRate;
  for (var i = 0; i < hammingWindowFilter.length; i++) {
      hammingWindowFilter[i] = 0.54 - 0.46 * Math.cos(2*Math.PI * i/(hammingWindowFilter.length-1));
  };
  var fft;

  function applyHamming(inputVector, outputVector)
  {
      for (var i = 0; i < inputVector.length; i++) {
          outputVector[i] = inputVector[i] * hammingWindowFilter[i];
      };
  }

  function log2(val) 
  {
    return Math.log(val) / Math.LN2;
  }

  function getNoteInfo(frequency)
  {
      var note = (Math.round(57+log2( frequency/440.0 )*12 ))%12;
      console.log(note);
      var noteFull = Math.round(log2( frequency/440.0 )*12);
      var noteFreq = Math.pow(2,noteFull/12.0)*440.0;
      var errorMin = frequency - noteFreq;
      var noteOther = (errorMin > 0) ? noteFull+1 : noteFull-1;
      var freqOther = Math.pow(2,noteOther/12.0)*440.0;
      var cent = errorMin / Math.abs(noteFreq - freqOther);
      // console.log('note' ,note , 'cent ' ,cent , 'frekvens ', frequency);
      
      var noteInfo = {
          "noteIndex": note,
          "noteError": cent,
          "noteFreq": frequency
      };

      return noteInfo;
  }
  // Create a stream of the audio input 
  function gotStream(stream) {
      var bufferSize = 2048; // Måste va power of 2, 
      gainNode = audioContext.createGain(); //Skapar GainNode objekt som kan kontrollera volymen
      gainNode.gain.value = 1000.0;
      
      inputStreamNode = audioContext.createMediaStreamSource(stream); //Skapar ett MediaStreamAudioSourceNode objekt som strömmar in ljud från mikrofonen.
      inputStreamNode.connect(gainNode); //Kopplar ihop med ljudkontrollen

      scriptProcessorNode = audioContext.createScriptProcessor(bufferSize, 1, 1); //För ljudanalys, en inkanal och en utkanal
      console.log('script ', scriptProcessorNode);

      sampleRate = audioContext.sampleRate; //Hämta sample per sekund från audio input, används för alla objekt/noder 
      console.log('sampleRate ', sampleRate, audioWindowSize);
      fft = new FFT(audioWindowSize, sampleRate); //Skapar fouriertransform. Hitta en balans mellan windowsize och samplerate (65536 standard?)

      gainNode.connect (scriptProcessorNode); //koppla ihop volym och ljudobjekt 

      // zeroPadding/zeroGain öka  vektorn för att få bättre upplösning i frekvensen. nogrannare. Effektivare
      var zeroGain = audioContext.createGain();
      zeroGain.gain.value = 0.0;
      scriptProcessorNode.connect( zeroGain );
      zeroGain.connect( audioContext.destination ); 

      play();
  }

  function stopAudio()
  {
      scriptProcessorNode.onaudioprocess = null;
  }

  function startAudio()
  {
      //onaudioprocess är en eventhandler. 
      scriptProcessorNode.onaudioprocess = function(e){
          var timeVector = e.inputBuffer.getChannelData(0); //Hämta vektorn med audioData
          audioWindow.set(audioWindow.subarray(timeVector.length)); // fixa med hamming
          audioWindow.set(timeVector,audioWindowSize - timeVector.length); // fixa med hamming
          applyHamming(audioWindow,audioWindowProcessed); // lägg hamming
          fft.forward(audioWindowProcessed);  //gör fast fourier transform

          var spectrum = fft.spectrum;    //ta frekvensspektrumet 
          var peakInfo = getMaxPeak(spectrum);  //hämta frekvens där vi har högst amplitud
          if (peakInfo["peakAmp"] > 0.5)    //använd bara peakar över 0.5 för bättre nogrannhet
          {
              var frequency = peakInfo["peakInd"]*sampleRate/audioWindowSize;   //omvandla till frekvens
              console.log('FREQUENCY ' , frequency);
              var noteInfo = getNoteInfo(frequency);      //Hämta info från noter
              updateTuner(noteInfo["noteIndex"],noteInfo["noteError"]);
          }

      }
  }

  function browserNotSupported()
  {
      alert("Sorry. Your browser is not supported. Please use latest versions of either Chrome or Firefox.")
  }
  //allow audio from user
  $scope.initAudio = function () {
      // console.log('initAudio')
      if (!navigator.getUserMedia)
      {
          navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      }

      if (!navigator.getUserMedia)
      {
          browserNotSupported();
      }

      // which media input is used , 
      navigator.getUserMedia({audio:true}, gotStream, function(e) {
              // alert('Error getting audio');
              console.log(e);
          });
  }

  $scope.$on('$viewContentLoaded', function(){
      $scope.initAudio();
  }) ;

});


'use strict';

/**
 * @ngdoc directive
 * @name guitarTunerAppApp.directive:spectrum
 * @description
 * # spectrum
 */
angular.module('guitarTunerAppApp')
  .directive('spectrum', function ($window) {
    return {
      templateUrl: 'scripts/directives/spectrum.html',
      restrict: 'EA',
      scope: {
        spectrumData:'=spectrumData'
      },
      link: function postLink(scope, element, attrs) {
        //styles
        scope.stapleStyle = [];
        scope.stapleWrapStyle = "";
        
        var wrapElementWidth = element[0].firstChild;
        var indexStapleWidth = 25;
        var stpl = 0;
        var sum = 0;
        var stapleWidth;

        //from spectrum element attrs
        scope.maxFreq = typeof attrs.minFreq !== 'undefined' ?  attrs.maxFreq : 2000;
        scope.minFreq = typeof attrs.minFreq !== 'undefined' ?  attrs.minFreq : 0;
        scope.middleFreq = scope.maxFreq/2;

        scope.stapleAverageAmp = [];



        scope.updateStaple = function(staple){
          sum = 0;
          stpl = 0;
          //set average of staples and number of staples
          for(var i=7;i<scope.maxFreq;i++)
          {
            sum += scope.spectrumData[i];
            if(i%indexStapleWidth === 0 && i < scope.maxFreq) 
            {
              scope.stapleAverageAmp[stpl] = ((sum/indexStapleWidth));
              sum = 0;
              stpl++;
            }
          }
          //calculate staple style
          if(wrapElementWidth.clientWidth > $window.innerWidth)
          {
            stapleWidth = $window.innerWidth/stpl;
          }
          else
            stapleWidth = wrapElementWidth.clientWidth/stpl;

          //set wrapper style staple, 
          scope.stapleWrapStyle =
            {
              width : '' + stapleWidth + 'px'
            }
          //set the height and width of staple
          for(var i = 0; i < scope.stapleAverageAmp.length; i++){
            var heightInPx = 35*scope.stapleAverageAmp[i];
            if(heightInPx > 200)
              heightInPx = 200;
            //staple style
            scope.stapleStyle[i] = 
              {
                height : '' + heightInPx +'px' ,
                width  : '' + (stapleWidth-1) + 'px'
              };
          }

        }
        //watch data
        scope.$watchCollection('spectrumData', function() {
            scope.updateStaple();
        });

        // angular.element($window).bind('resize', function(){
        //   console.log('resizing', $window.innerWidth);
        //   // if(wrapElementWidth.clientWidth > $window.innerWidth)
        //   // {

        //   // }
        // });
      






    }
 };
});

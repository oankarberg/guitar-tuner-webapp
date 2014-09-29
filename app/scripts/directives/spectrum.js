'use strict';

/**
 * @ngdoc directive
 * @name guitarTunerAppApp.directive:spectrum
 * @description
 * # spectrum
 */
angular.module('guitarTunerAppApp')
  .directive('spectrum', function () {
    return {
      templateUrl: 'scripts/directives/spectrum.html',
      restrict: 'EA',
      scope: {
        spectrumData:'=spectrumData'
      },
      link: function postLink(scope, element, attrs) {
        scope.stapleStyle = [];


          scope.$watch('spectrumData', function() {

              for(var i = 0; i < scope.spectrumData.length; i++){
                var heightInPx = 35*scope.spectrumData[i];
                if(heightInPx > 200)
                  heightInPx = 200;
                scope.stapleStyle[i] = 
                  {
                    height : '' + heightInPx +'px' 
                  };
              }

          });

    

        

      }
    };
  });

'use strict';

describe('Directive: spectrum', function () {

  // load the directive's module
  beforeEach(module('guitarTunerAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<spectrum></spectrum>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the spectrum directive');
  }));
});

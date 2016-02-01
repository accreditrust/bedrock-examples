/*!
 * Copyright (c) 2015 Digital Bazaar, Inc. All rights reserved.
 */
define([], function() {

'use strict';

/* @ngInject */
function factory() {
  return {
    restrict: 'E',
    scope: {
      sortDescending: '='
    },
    templateUrl: requirejs.toUrl(
      'angular-basic/home/home-directive.html'),
    link: Link
  };

  function Link(scope) {
    var model = scope.model = {};
    model.numbers = [1, 5, 99, 6, 75];
    model.sortDescending = scope.sortDescending;
  }
}

return {exShowNumbers: factory};

});
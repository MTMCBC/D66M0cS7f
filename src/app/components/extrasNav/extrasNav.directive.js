(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('extrasNav', extrasNav);

  /** @ngInject */
  function extrasNav() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/extrasNav/extrasNav.html',
      controller: ExtrasNavController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    ExtrasNavController.$inject = ['$scope'];
    /** @ngInject */
    function ExtrasNavController($scope) {
      var vm = this;
    }
  }

})();

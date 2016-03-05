(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('hubFooter', hubFooter);

  /** @ngInject */
  function hubFooter() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/hubFooter/hubFooter.html',
      controller: HubFooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    HubFooterController.$inject = ['$scope'];
    /** @ngInject */
    function HubFooterController() {

    }
  }

})();

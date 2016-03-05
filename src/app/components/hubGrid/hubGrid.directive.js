/**
 * Created by michael on 29/12/15.
 */
(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('hubGrid', hubGrid);

  /** @ngInject */
  function hubGrid() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/hubGrid/hubGrid.html',
      controller: HubGridController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    HubGridController.$inject = ['$scope'];
    /** @ngInject */
    function HubGridController() {

    }
  }

})();

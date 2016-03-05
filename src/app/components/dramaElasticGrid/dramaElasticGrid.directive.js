(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('dramaElasticGrid', dramaElasticGrid);

  /** @ngInject */
  function dramaElasticGrid() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/dramaElasticGrid/dramaElasticGrid.html',
      controller: DramaElasticGridController,
      scope:{},
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    DramaElasticGridController.$inject = ['$scope'];
    /** @ngInject */
    function DramaElasticGridController($scope) {
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('seriesSearch', seriesSearch);

  /** @ngInject */
  function seriesSearch() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/seriesSearch/seriesSearch.html',
      controller: SeriesSearchController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    SeriesSearchController.$inject = ['$scope'];
    /** @ngInject */
    function SeriesSearchController() {
      var vm = this;
    }
  }
})();

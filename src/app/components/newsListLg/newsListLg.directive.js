(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('newsListLg', newsListLg);

  /** @ngInject */
  function newsListLg() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/newsListLg/newsListLg.html',
      controller: NewsListLgController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    NewsListLgController.$inject = ['$scope'];
    /** @ngInject */
    function NewsListLgController() {

    }
  }

})();

(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('newsListSm', newsListSm);

  /** @ngInject */
  function newsListSm() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/newsListSm/newsListSm.html',
      controller: NewsListSmController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    NewsListSmController.$inject = ['$scope'];
    /** @ngInject */
    function NewsListSmController() {

    }
  }

})();

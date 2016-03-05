(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('newsHeader', newsHeader);

  /** @ngInject */
  function newsHeader() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/newsHeader/newsHeader.html',
      controller: NewsHeaderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    NewsHeaderController.$inject = ['$scope'];
    /** @ngInject */
    function NewsHeaderController() {

    }
  }

})();

(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('innerLive', innerLive);

  /** @ngInject */
  function innerLive() {
    var directive = {
      restrict: 'AE',
      scope: {
        pageName : "@"
      },
      templateUrl: 'app/components/innerLive/innerLive.html',
      controller: InnerLiveController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    InnerLiveController.$inject = ['$scope'];
    /** @ngInject */
    function InnerLiveController() {
      var vm = this;
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('innerTopBar', innerTopBar);

  /** @ngInject */
  function innerTopBar() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/innerTopBar/innerTopBar.html',
      controller: InnerTopBarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    InnerTopBarController.$inject = ['$scope'];

    /** @ngInject */
    function InnerTopBarController($scope, $modal) {
      var vm = this;
      $scope.logo = "cbc.png";
      $scope.innerLogo = "cbc-drama-logo-color.png"

      $scope.open = function () {

        var modalInstance = $modal.open({
          templateUrl: 'app/components/signIn/signIn.html',
          controller: 'SignInController',
          size: 'lg',
          class: 'login-container'
        });
      }
    }
  }
})();

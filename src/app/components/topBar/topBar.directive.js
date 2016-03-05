(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('topBar', topBar);

  /** @ngInject */
  function topBar() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/topBar/topBar.html',
      controller: TopBarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TopBarController($scope,$state) {
      var vm = this;
      $scope.logo  = "cbc.png";

      $scope.live = function(channel){
        $state.go(
          'live',{
            channel:channel
          }
        );
      }
    }
  }

})();

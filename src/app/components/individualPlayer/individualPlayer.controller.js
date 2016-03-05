(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('individualPlayer', individualPlayer);

  /** @ngInject */
  function individualPlayer() {
    var directive = {
      restrict: 'AE',
      scope: {},
      templateUrl: 'app/components/individualPlayer/individualPlayer.html',
      controller: IndividualPlayerController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    IndividualPlayerController.$inject = ['$scope'];

    /** @ngInject */
    function IndividualPlayerController($rootScope) {
      var vm = this;
      $rootScope.$on('createPlayer', function(){
        vm.playerOn = true
        //angular.element('#bt-menu').removeClass('bt-menu-close' );
        //angular.element('#bt-menu').addClass('bt-menu-open' );
      });
      vm.closePlayer = function(){
        vm.playerOn = false;
      }
    }

  }

})();

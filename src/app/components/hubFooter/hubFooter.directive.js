(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('hubFooter', hubFooter);

  /** @ngInject */
  function hubFooter() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/hubFooter/hubFooter.html',
      controller: HubFooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    HubFooterController.$inject = ['$scope'];
    /** @ngInject */
    function HubFooterController($state) {
      var vm = this;
      vm.goTo = function(channel){
        switch (channel){
          case 'cbc':
            $state.go(
                'cbc'
            );
            break;
          case 'drama':
            $state.go(
                'drama'
            );
            break;
          case 'extras':
            $state.go(
                'extras'
            );
            break;
        }
      }
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('extrasHeaderSection', extrasHeaderSection);

  /** @ngInject */
  function extrasHeaderSection() {
    var directive = {
      restrict: 'AE',
      scope: {
        pageName : "@"
      },
      templateUrl: 'app/components/extrasHeaderSection/extrasHeaderSection.html',
      controller: ExtrasHeaderSectionController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    ExtrasHeaderSectionController.$inject = ['$scope'];
    /** @ngInject */
    function ExtrasHeaderSectionController() {
      var vm = this;
    }
  }

})();

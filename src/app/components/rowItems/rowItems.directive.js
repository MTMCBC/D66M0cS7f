(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('rowItems', rowItems);

  /** @ngInject */
  function rowItems() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/rowItems/rowItems.html',
      controller: RowItemsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    RowItemsController.$inject = ['$scope'];
    /** @ngInject */
    function RowItemsController($scope) {
      var vm = this;
      $scope.slides = [
        {
          image: '../assets/images/es3ad.png',
          header: 'بدء التصوير في مسلسل سشي'

        },
        {
          image: '../assets/images/lames.png',
          header: 'بعد القادة والمانيا بالولايات و, أي با'
        },
        {
          image: '../assets/images/sherbini.png',
          header: 'أخر اعتداء للحكومة هو'
        },
        {
          image: '../assets/images/george.png',
          header: 'الأسيوي استعملت الانجليزية أن تحت'
        },
        {
          image: '../assets/images/faheta.png',
          header: 'أخر اعتداء للحكومة هو'
        },
        {
          image: '../assets/images/marim.png',
          header: 'الأسيوي استعملت الانجليزية أن تحت'
        }
      ];
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('dramaCarousel', dramaCarousel);

  /** @ngInject */
  function dramaCarousel() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/dramaCarousel/dramaCarousel.html',
      controller: DramaCarouselController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function DramaCarouselController($scope) {
      var vm = this;
      $scope.myInterval = 3000;
      $scope.slides = [
        {
          image: '../../../assets/images/georgeBanner2.png'
        },
        {
          image: '../../../assets/images/harbGawases.png'
        },
        {
          image: '../../../assets/images/georgeBanner2.png'
        },
        {
          image: '../../../assets/images/harbGawases.png'
        }
      ];
    }
  }

})();

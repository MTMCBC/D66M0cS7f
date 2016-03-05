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

    DramaCarouselController.$inject = ['$scope'];
    /** @ngInject */
    function DramaCarouselController($scope) {
      var vm = this;
      $scope.myInterval = 3000;
      $scope.slides = [
        {
          image: 'http://lorempixel.com/1280/720/'
        },
        {
          image: 'http://lorempixel.com/1280/720/food'
        },
        {
          image: 'http://lorempixel.com/1280/720/sports'
        },
        {
          image: 'http://lorempixel.com/1280/720/people'
        }
      ];
    }
  }

})();

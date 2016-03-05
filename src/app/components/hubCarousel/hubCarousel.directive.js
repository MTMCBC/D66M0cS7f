(function () {
  'use strict';

  angular
    .module('cbc')
    .directive('hubCarousel', hubCarousel);

  /** @ngInject */
  function hubCarousel() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/hubCarousel/hubCarousel.html',
      controller: HubCarouselController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    HubCarouselController.$inject = ['$scope'];
    /** @ngInject */
    function HubCarouselController($scope) {
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
      $scope.currentSlide = -1;

      $scope.channelsProgrammes = [[{id: 'progName', color: 'red', description: ''}, {
        id: 'progName',
        color: 'green',
        description: ''
      }, {id: 'progName', color: 'blue', description: ''}
        , {id: 'progName', color: 'white', description: ''}, {
          id: 'progName',
          color: 'black',
          description: ''
        }, {id: 'progName', color: 'rebeccapurple', description: ''},
        {id: 'progName', color: 'yellow', description: ''}],
        [{id: 'progName', color: 'white', description: ''}, {
          id: 'progName',
          color: 'red',
          description: ''
        }, {id: 'progName', color: 'yellow', description: ''}
          , {id: 'progName', color: 'brown', description: ''}, {
          id: 'progName',
          color: 'black',
          description: ''
        }, {id: 'progName', color: 'green', description: ''},
          {id: 'progName', color: 'gray', description: ''}],
        [{id: 'progName', color: 'red', description: ''}, {
          id: 'progName',
          color: 'green',
          description: ''
        }, {id: 'progName', color: 'blue', description: ''}
          , {id: 'progName', color: 'white', description: ''}, {
          id: 'progName',
          color: 'black',
          description: ''
        }, {id: 'progName', color: 'rebeccapurple', description: ''},
          {id: 'progName', color: 'yellow', description: ''}],
        [{id: 'progName', color: 'red', description: ''}, {
          id: 'progName',
          color: 'green',
          description: ''
        }, {id: 'progName', color: 'blue', description: ''}
          , {id: 'progName', color: 'white', description: ''}, {
          id: 'progName',
          color: 'black',
          description: ''
        }, {id: 'progName', color: 'rebeccapurple', description: ''},
          {id: 'progName', color: 'yellow', description: ''}]];

      $scope.channels = [{id: '', logo: 'assets/images/cbc-extra-logo-color.png'}, {
        id: '',
        logo: 'assets/images/cbc-sofra-logo-color.png'
      }
        , {id: '', logo: 'assets/images/cbc-drama-logo-color.png'}, {id: '', logo: 'assets/images/cbc-color.png'}];

      $scope.live = [{title: 'shabaka w senara'}, {title: 'shabaka w senara'}, {title: 'shabaka w senara'}, {title: 'shabaka w senara'}];


      $scope.hoverItem = function (index) {

        $scope.hovered = true;
        $scope.myInterval = -1;
        if (index != undefined) {
          $scope.currentSlide = index;
          $scope.slides[index].active = true;
        } else {
          $scope.currentSlide = 0;
          $scope.slides[0].active = true;
        }
      };

      $scope.leaved = function () {
        //$scope.hovered = false;
      };
    }
  }

})();

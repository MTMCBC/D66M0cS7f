(function () {
  'use strict';

  angular
    .module('cbc')
    .directive('hubItemsCarousel', hubItemsCarousel);

  /** @ngInject */
  function hubItemsCarousel() {
    var directive = {
      restrict: 'AE',
      scope: {
        slidesNumber : "="
      },
      templateUrl: 'app/components/hubItemsCarousel/hubItemsCarousel.html',
      controller: HubItemsCarouselController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    HubItemsCarouselController.$inject = ['$scope'];

    /** @ngInject */
    function HubItemsCarouselController($rootScope, $modal) {

      var vm = this;
      vm.slides = [
        {
          image: '../assets/images/es3ad.png'
        },
        {
          image: '../assets/images/lames.png'
        },
        {
          image: '../assets/images/marim.png'
        },
        {
          image: '../assets/images/sherbini.png'
        }, {
          image: '../assets/images/wallah.png'
        },
        {
          image: '../assets/images/goda.png'
        },
        {
          image: '../assets/images/george.png'
        },
        {
          image: '../assets/images/faheta.png'
        }
      ];

      vm.slickConfig = {
        enabled: true,
        autoplay: false,
        draggable: false,
        infinit: true,
        method: {},
        event: {
          beforeChange: function (event, slick, currentSlide, nextSlide) {
          },
          afterChange: function (event, slick, currentSlide, nextSlide) {
          }
        },
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: (vm.slidesNumber - 1)>1? vm.slidesNumber - 1 : 1 ,
              slidesToScroll: Math.floor((vm.slidesNumber - 1)/2)>1? Math.floor((vm.slidesNumber - 1)/2) : 1,
              infinit: true
            }
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: (vm.slidesNumber - 2)>1? vm.slidesNumber - 2 : 1 ,
              slidesToScroll: Math.floor((vm.slidesNumber - 2)/2)>1? Math.floor((vm.slidesNumber - 2)/2) : 1,
              infinit: true
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: (vm.slidesNumber - 3)>1? vm.slidesNumber - 3 : 1 ,
              slidesToScroll: Math.floor((vm.slidesNumber - 3)/2)>1? Math.floor((vm.slidesNumber - 3)/2) : 1,
              infinit: true
            }
          }
          ,
          {
            breakpoint: 400,
            settings: {
              slidesToShow: (vm.slidesNumber - 4)>1? vm.slidesNumber - 4 : 1 ,
              slidesToScroll: Math.floor((vm.slidesNumber - 4)/2)>1? Math.floor((vm.slidesNumber - 4)/2) : 1,
              infinit: true
            }
          }
        ]
      };

      vm.slideClick = function (ev) {
        $rootScope.$broadcast('createPlayer');
      }
    }

  }

})();

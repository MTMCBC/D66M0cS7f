/**
 * Created by michael on 05/03/16.
 */
(function () {
  angular.module('cbc').directive('dramaNewsSlick', dramaNewsSlick)

  function dramaNewsSlick() {
    return {
      restrict: 'AE',
      templateUrl: 'app/components/dramaNewsSlick/dramaNewsSlick.html',
      controller: dramaNewsSlickController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        slidesNumber : "="
      },
    }
  }

  dramaNewsSlickController.$inject = ['$scope'];
  /** @ngInject */
  function dramaNewsSlickController() {
    var vm = this;
    vm.slides = [
      {
        image: '../assets/images/es3ad.png',
        header: 'النتاا اتا تان ن',
        breif: 'النتاا اتا تان ن'
      },
      {
        image: '../assets/images/lames.png',
        header: 'النتاا اتا تان ن',
        breif: 'النتاا اتا تان ن'
      },
      {
        image: '../assets/images/marim.png',
        header: 'النتاا اتا تان ن',
        breif: 'النتاا اتا تان ن'
      },
      {
        image: '../assets/images/sherbini.png',
        header: 'النتاا اتا تان ن',
        breif: 'النتاا اتا تان ن'
      }, {
        image: '../assets/images/wallah.png',
        header: 'النتاا اتا تان ن',
        breif: 'النتاا اتا تان ن'
      },
      {
        image: '../assets/images/goda.png',
        header: 'النتاا اتا تان ن',
        breif: 'النتاا اتا تان ن'
      },
      {
        image: '../assets/images/george.png',
        header: 'النتاا اتا تان ن',
        breif: 'النتاا اتا تان ن'
      },
      {
        image: '../assets/images/faheta.png',
        header: 'النتاا اتا تان ن',
        breif: 'النتاا اتا تان ن'
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
  }
})();

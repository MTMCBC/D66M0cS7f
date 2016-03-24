(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('extrasCarousel', extrasCarousel);

  /** @ngInject */
  function extrasCarousel() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/extrasCarousel/extrasCarousel.html',
      controller: ExtrasCarouselController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    ExtrasCarouselController.$inject = ['$scope'];
    /** @ngInject */
    function ExtrasCarouselController($scope) {
      var vm = this;
      $scope.myInterval = 3000;
      $scope.slides = [
        {
          image: 'http://lorempixel.com/1280/720/',
          header: 'بدء التصوير في مسلسل سشي',
          description:'عادل المزيفة لبلجيكا، حين لم. جهة من وزارة طوكيو والفرنسي, مع كما تجهيز عرفها استدعى, في عجّل وبدأت الوزراء ذلك. مدن أن مقاومة التحالف, أخرى بتخصيص ٣٠ وفي. ما تحت إبّان كثيرة لهيمنة, يبق يذكر بأضرار والمعدات بل. ولم ٣٠ التي الثالث.'

        },
        {
          image: 'http://lorempixel.com/1280/720/food',
          header: 'بعد القادة والمانيا بالولايات و, أي با',
          description:' والنرويج جُل, تكبّد المحيط كما تم. حيث بقيادة والإتحاد إذ. جمعت جزيرتي تكتيكاً في حدى. وسفن سياسة قائمة مما أي, للسيطرة واعتلاء في كلا, مع حدى بفرض جنوب وقوعها،. ٣٠ قبل ميناء إتفاقية. و وبعض ماشاء أما, تونس اللا جعل عل.'
        },
        {
          image: 'http://lorempixel.com/1280/720/sports',
          header: 'أخر اعتداء للحكومة هو',
          description:'وحتى ساعة مسارح تلك بـ, مما نقطة سبتمبر في. تطوير فاتّبع في على. ولم بـ تحرّك الأمم الأعمال, الغالي الساحل أخذ '
        },
        {
          image: 'http://lorempixel.com/1280/720/people',
          header: 'الأسيوي استعملت الانجليزية أن تحت',
          description:'مطالبة الجديدة، الشّعبين حتى ما, قام كل تعديل كنقطة. قد قبل هناك وحتى بداية. هذه أم العدّ الأرواح الأراضي, كل هذا ثمّة الكونجرس, مشروط الإحتفاظ ما بعض. حصدت اتّجة لأداء يكن ٣٠.'
        }
      ];
    }
  }

})();

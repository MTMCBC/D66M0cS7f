(function() {
  'use strict';

  angular
    .module('cbc')
    .directive('schedule', schedule);

  /** @ngInject */
  function schedule() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/schedule/schedule.html',
      controller: ScheduleController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    ScheduleController.$inject = ['$scope'];
    /** @ngInject */
    function ScheduleController() {
      var vm = this;
    }
  }

})();

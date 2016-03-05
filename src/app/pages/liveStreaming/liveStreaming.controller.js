(function() {
  'use strict';

  angular
    .module('cbc')
    .controller('LiveStreamingController', LiveStreamingController);

  /** @ngInject */
  function LiveStreamingController($scope, $stateParams, $sce) {
    $scope.right = false;
    $scope.left = false;

    switch ($stateParams.channel) {
      case 'cbc':
        $scope.link = $sce.trustAsResourceUrl('https://www.youtube.com/embed/1yEMLzYzE1g')
        break;
      case 'extra':
        $scope.link = $sce.trustAsResourceUrl('https://www.youtube.com/embed/1yEMLzYzE1g')
        break;
      case 'drama':
        $scope.link = $sce.trustAsResourceUrl('https://www.youtube.com/embed/uMvhnVugCjo')
        break;
      case 'sofra':
        $scope.link = $sce.trustAsResourceUrl('https://www.youtube.com/embed/K8XaIiikpAo')
        break;

        
    }
    


    $scope.rightClick = function(){
      $scope.right = !$scope.right;
    }

    $scope.leftClick = function(){
      $scope.left = !$scope.left;
    }
  }
})();

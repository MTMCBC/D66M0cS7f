(function() {
  'use strict';

  angular
    .module('cbc')
    .controller('ProgramController', ProgramController);

  /** @ngInject */
  function ProgramController($scope) {
    $scope.otherProgs = [
      {image:'../../../assets/images/mostafa.png'},
      {image:'../../../assets/images/3eshaswadIMG.png'},
      {image:'../../../assets/images/mostafa.png'},
      {image:'../../../assets/images/3eshaswadIMG.png'},
      {image:'../../../assets/images/mostafa.png'},
      {image:'../../../assets/images/3eshaswadIMG.png'}
    ]
  }
})();

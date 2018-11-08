export default angular
  .module('controllers.IndexController', [])
  .controller('IndexController', ['$scope', function ($scope) {
    let $me = this;
    
    $scope.$on('updatedPageInfo', (e, pageInfo) => {
      $me.title = pageInfo.title;
      $me.description = pageInfo.description;
    });

    // Menu data
    $me.menu = [
      { path: './', label: 'Home' },
      { path: 'about', label: 'About' }
    ];
  }])
  .name;

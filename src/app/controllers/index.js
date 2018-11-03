export default angular
  .module('controllers.IndexController', [])
  .controller('IndexController', ['$scope', function ($scope) {
    let $me = this;
    
    $scope.$on('updatedPageInfo', (e, pageInfo) => {
      $me.title = pageInfo.title;
      $me.description = pageInfo.description;
    });

    $me.menu = ['menu1', 'menu2', 'menu3'];
    $me.menuloaded = () => {
      console.log('menuloaded');
    };
    $me.pushMenu = () => {
      $me.menu.push('menu' + ($me.menu.length + 1));
    };
    $me.popMenu = () => {
      $me.menu.pop();
    };
  }])
  .name;

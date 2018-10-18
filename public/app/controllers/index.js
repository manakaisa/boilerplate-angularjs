export default {
  name: 'IndexController',
  annotation: ['$scope'],
  controller: function ($scope) {
    let $me = this;
    
    $scope.$on('updatedPageInfo', (e, pageInfo) => {
      $me.title = pageInfo.title;
      $me.description = pageInfo.description;
    });

    $me.menu = ['menu1', 'menu2', 'menu3'];
    $me.menuloaded = () => {
      console.log('menuloaded');
    };
  }
};

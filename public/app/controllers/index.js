export const name = 'IndexController';

export const annotation = ['$scope'];

export const controller = function ($scope) {
  let $me = this;
  
  $scope.$on('updatedPageInfo', function (e, pageInfo) {
    $me.title = pageInfo.title;
    $me.description = pageInfo.description;
  });

  $me.menu = ['menu1', 'menu2', 'menu3'];
  $me.menuloaded = function () {
    console.log('menuloaded');
  };
};

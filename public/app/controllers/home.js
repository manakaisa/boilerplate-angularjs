export const name = 'HomeController';

export const annotation = ['$scope'];

export const controller = function ($scope) {
  let $me = this;

  $scope.$emit('updatedPageInfo', {
    title: 'Home',
    description: 'Home - description'
  });

  $me.content = 'hello world';
};

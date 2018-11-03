export default angular
  .module('controllers.HomeController', [])
  .controller('HomeController', ['$scope', function ($scope) {
    let $me = this;

    $scope.$emit('updatedPageInfo', {
      title: 'Home',
      description: 'Home - description'
    });

    $me.content = 'hello world';
  }])
  .name;

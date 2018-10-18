export default {
  name: 'HomeController',
  annotation: ['$scope'],
  controller: function ($scope) {
    let $me = this;

    $scope.$emit('updatedPageInfo', {
      title: 'Home',
      description: 'Home - description'
    });

    $me.content = 'hello world';
  }
};

export default angular
  .module('controllers.HomeController', [])
  .controller('HomeController', ['$scope', '$pageInfo', function ($scope, $pageInfo) {
    let $me = this;

    // Meta
    $pageInfo.title = 'Home';
    $pageInfo.description = 'Home - description';

    // Page content (example)
    $me.title = 'Home';
  }])
  .name;

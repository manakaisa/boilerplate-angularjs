export default angular
  .module('controllers.AboutController', [])
  .controller('AboutController', ['$scope', '$pageInfo', function ($scope, $pageInfo) {
    let $me = this;

    // Meta
    $pageInfo.title = 'About';
    $pageInfo.description = 'About - description';

    // Page content (example)
    $me.title = 'About';
  }])
  .name;

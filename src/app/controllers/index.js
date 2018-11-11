export default angular
  .module('controllers.IndexController', [])
  .controller('IndexController', ['$scope', function ($scope) {
    let $me = this;

    $me.menu = [
      { path: './', label: 'Home' },
      { path: 'about', label: 'About' }
    ];
  }])
  .name;

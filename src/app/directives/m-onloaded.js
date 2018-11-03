export default angular
  .module('directives.mOnloaded', [])
  .directive('mOnloaded', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      link: ($scope, $element, $attrs) => {
        $timeout(() => {
          $scope.$apply($attrs.mOnloaded);
        });
      }
    };
  }])
  .name;

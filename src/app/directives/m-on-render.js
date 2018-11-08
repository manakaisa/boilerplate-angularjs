export default angular
  .module('directives.mOnRender', [])
  .directive('mOnRender', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      link: ($scope, $element, $attrs) => {
        $timeout(() => {
          $scope.$apply($attrs.mOnRender);
        });
      }
    };
  }])
  .name;

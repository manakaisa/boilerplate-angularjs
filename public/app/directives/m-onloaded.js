export default {
  name: 'mOnloaded',
  annotation: ['$timeout'],
  directive: function ($timeout) {
    return {
      restrict: 'A',
      link: ($scope, $element, $attrs) => {
        $timeout(() => {
          $scope.$apply($attrs.mOnloaded);
        });
      }
    };
  }
};

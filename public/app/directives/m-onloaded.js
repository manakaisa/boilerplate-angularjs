export const name = 'mOnloaded';

export const annotation = ['$timeout'];

export const directive = function ($timeout) {
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      $timeout(function () {
        $scope.$apply($attrs.mOnloaded);
      });
    }
  };
};

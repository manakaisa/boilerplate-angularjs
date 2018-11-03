export default angular
  .module('directives.mLayout', [])
  .directive('mLayout', [function () {
    return {
      transclude: {
        top: '?mLayoutTop',
        left: '?mLayoutLeft',
        body: '?mLayoutBody',
        right: '?mLayoutRight',
        bottom: '?mLayoutBottom'
      },
      templateUrl: ($element, $attrs) => {
        return $attrs.href;
      }
    };
  }])
  .name;

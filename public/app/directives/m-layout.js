export default {
  name: 'mLayout',
  annotation: [],
  directive: function () {
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
  }
};

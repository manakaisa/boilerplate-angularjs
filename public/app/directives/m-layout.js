export const name = 'mLayout';

export const annotation = [];

export const directive = function () {
  return {
    transclude: {
      top: '?mLayoutTop',
      left: '?mLayoutLeft',
      body: '?mLayoutBody',
      right: '?mLayoutRight',
      bottom: '?mLayoutBottom'
    },
    templateUrl: function ($element, $attrs) {
      return $attrs.href;
    }
  };
};

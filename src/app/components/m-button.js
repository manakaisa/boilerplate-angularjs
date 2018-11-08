const templateHTML = `
  <button ng-click="$ctrl.handleClick()" ng-transclude></button>
`;

export default angular
  .module('components.mButton', [])
  .component('mButton', {
    bindings: {
      onClick: '&'
    },
    transclude: true,
    template: templateHTML,
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      let $ctrl = this;

      $ctrl.handleClick = () => {
        $ctrl.onClick();
      };
    }]
  })
  .name;

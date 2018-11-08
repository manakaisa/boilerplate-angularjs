const templateHTML = `
  <input type="text" ng-model="$ctrl.value" ng-change="$ctrl.handleChange()" />
`;

export default angular
  .module('components.mTextbox', [])
  .component('mTextbox', {
    bindings: {
      value: '<',
      onChange: '&'
    },
    transclude: true,
    template: templateHTML,
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      let $ctrl = this;
      
      $ctrl.handleChange = () => {
        $ctrl.onChange({ value: $ctrl.value });
      };
    }]
  })
  .name;

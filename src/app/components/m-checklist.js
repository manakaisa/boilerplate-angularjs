const templateHTML = `
  <ul>
    <li ng-repeat="item in $ctrl.checklistState">
      <input type="checkbox" ng-value="item.key" ng-model="item.checked" ng-change="$ctrl.handleChange(item)" />
      <span>{{item.label}}</span>
    </li>
  </ul>
`;

export default angular
  .module('components.mChecklist', [])
  .component('mChecklist', {
    bindings: {
      checklist: '<',
      onCheck: '&'
    },
    template: templateHTML,
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      let $ctrl = this;

      // Make immutable for Object and Array
      $ctrl.$onChanges = (changesObj) => {
        if (changesObj.checklist) {
          $ctrl.checklistState = angular.copy(changesObj.checklist.currentValue);
        }
      };

      $ctrl.handleChange = (item) => {
        $ctrl.onCheck({ key: item.key, checked: item.checked });
      };
    }]
  })
  .name;

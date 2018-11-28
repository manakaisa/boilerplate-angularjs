const templateHTML = `
  <ul>
    <li ng-repeat="item in $ctrl.checklist">
      <input type="checkbox" ng-value="item.key" ng-model="$ctrl.checklistState[item.key]" ng-change="$ctrl.handleChange(item)" />
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

      $ctrl.checklistState = {};

      $ctrl.$onChanges = (changesObj) => {
        if (changesObj.checklist) {
          changesObj.checklist.currentValue.forEach(item => {
            $ctrl.checklistState[item.key] = item.checked;
          });
        }
      };

      $ctrl.handleChange = (item) => {
        $ctrl.onCheck({ key: item.key, checked: $ctrl.checklistState[item.key] });
      };
    }]
  })
  .name;

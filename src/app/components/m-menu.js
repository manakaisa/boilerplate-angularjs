const templateHTML = `
  <ul>
    <li ng-repeat="item in $ctrl.menuState"><a ng-href="{{item.path}}">{{item.label}}</a></li>
  </ul>
`;

export default angular
  .module('components.mMenu', [])
  .component('mMenu', {
    bindings: {
      menu: '<'
    },
    template: templateHTML,
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      let $ctrl = this;
    
      // Make immutable for Object and Array
      $ctrl.$onChanges = (changesObj) => {
        if (changesObj.menu) {
          $ctrl.menuState = angular.copy(changesObj.menu.currentValue);
        }
      };
    }]
  })
  .name;

const templateHTML = `
  <ul>
    <li ng-repeat="item in $ctrl.data">{{item}}</li>
  </ul>
`;

export default angular
  .module('components.mMenu', [])
  .component('mMenu', {
    bindings: {
      data: '<'
    },
    template: templateHTML,
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      let $ctrl = this;
      
      $ctrl.$onInit = () => { console.log($ctrl.data); };
    }]
  })
  .name;

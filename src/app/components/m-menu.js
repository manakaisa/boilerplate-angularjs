const templateHTML = `
  <ul>
    <li ng-repeat="item in $ctrl.data">{{item}}</li>
  </ul>
`;

export default {
  name: 'mMenu',
  component: {
    bindings: {
      data: '<'
    },
    template: templateHTML,
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      let $ctrl = this;
      
      $ctrl.$onInit = () => { console.log($ctrl.data); };
    }]
  }
};

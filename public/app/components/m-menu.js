export default {
  name: 'mMenu',
  component: {
    bindings: {
      data: '<'
    },
    templateUrl: 'app/components/m-menu.html',
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      let $ctrl = this;
      
      $ctrl.$onInit = () => { console.log($ctrl.data); };
    }]
  }
};

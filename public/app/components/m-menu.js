export const name = 'mMenu';

export const component = {
  bindings: {
    data: '<'
  },
  templateUrl: 'app/components/m-menu.html',
  controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
    let $ctrl = this;
    
    $ctrl.$onInit = function () {
      console.log($ctrl.data);
    };
  }]
};

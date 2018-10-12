export const name = 'mMenu';

export const component = {
  bindings: {
    data: '<'
  },
  templateUrl: 'views/components/menu.html',
  controller: function ($scope, $element, $attrs) {
    let ctrl = this;
    ctrl.$onInit = function () {
      console.log(ctrl.data);
    };
  }
};

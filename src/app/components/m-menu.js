const templateHTML = `
  <ul>
    <li ng-repeat="item in $ctrl.menu"><a ng-href="{{item.path}}">{{item.label}}</a></li>
  </ul>
`;

export default angular
  .module('components.mMenu', [])
  .component('mMenu', {
    bindings: {
      menu: '<'
    },
    template: templateHTML
  })
  .name;

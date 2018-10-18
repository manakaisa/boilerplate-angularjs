import $mMenu from './components/m-menu.js';

export default angular
  .module('components', [])
  .component($mMenu.name, $mMenu.component)
  .name;

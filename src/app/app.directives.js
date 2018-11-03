import $mLayout from './directives/m-layout.js';
import $mOnloaded from './directives/m-onloaded.js';

export default angular
  .module('directives', [
    $mLayout,
    $mOnloaded
  ])
  .name;

import $mLayout from './directives/m-layout.js';
import $mOnloaded from './directives/m-onloaded.js';

export default angular
  .module('directives', [])
  .directive($mLayout.name, [...$mLayout.annotation, $mLayout.directive])
  .directive($mOnloaded.name, [...$mOnloaded.annotation, $mOnloaded.directive])
  .name;

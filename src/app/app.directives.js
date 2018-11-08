import $mLayout from './directives/m-layout.js';
import $mOnRender from './directives/m-on-render.js';

export default angular
  .module('directives', [
    $mLayout,
    $mOnRender
  ])
  .name;

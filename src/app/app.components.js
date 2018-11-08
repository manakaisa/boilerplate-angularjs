import $mMenu from './components/m-menu.js';
import $mTodo from './components/m-todo.js';
import $mChecklist from './components/m-checklist.js';
import $mTextbox from './components/m-textbox.js';
import $mButton from './components/m-button.js';

export default angular
  .module('components', [
    $mMenu,
    $mTodo,
    $mChecklist,
    $mTextbox,
    $mButton
  ])
  .name;

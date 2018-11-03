import $index from './controllers/index.js';
import $home from './controllers/home.js';

export default angular
  .module('controllers', [
    $index,
    $home
  ])
  .name;

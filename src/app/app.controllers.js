import $index from './controllers/index.js';
import $home from './controllers/home.js';
import $about from './controllers/about.js';

export default angular
  .module('controllers', [
    $index,
    $home,
    $about
  ])
  .name;

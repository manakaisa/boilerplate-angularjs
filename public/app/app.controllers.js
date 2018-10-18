import $index from './controllers/index.js';
import $home from './controllers/home.js';

export default angular
  .module('controllers', [])
  .controller($index.name, [...$index.annotation, $index.controller])
  .controller($home.name, [...$home.annotation, $home.controller])
  .name;

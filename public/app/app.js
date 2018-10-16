
import $configs from './configs.js';
import $routes from './routes.js';
import * as $indexCtrl from './controllers/index.js';
import * as $homeCtrl from './controllers/home.js';
import * as $mLayoutDir from './directives/m-layout.js';
import * as $mOnloadedDir from './directives/m-onloaded.js';
import * as $mMenuComp from './components/m-menu.js';

// Registeration
var app = angular.module($configs.appName, ['ngRoute']);

// Configuration
app.config(['$routeProvider', '$locationProvider', '$compileProvider', '$sceProvider', function ($routeProvider, $locationProvider, $compileProvider, $sceProvider) {
  // Set routes
  for (let route in $routes) {
    $routeProvider.when(route, {
      templateUrl: $routes[route].path
    });
  }
  // Set 404 page
  $routeProvider.otherwise({
    templateUrl: '404.html'
  });
  // Set HTML5 mode for $location
  $locationProvider.html5Mode({
    enabled: true
  });
  // Disable debug info
  $compileProvider.debugInfoEnabled(false);
  // Disable comment and css directives
  $compileProvider.commentDirectivesEnabled(false);
  $compileProvider.cssClassDirectivesEnabled(false);
  // Disable HTML binding security
  $sceProvider.enabled(false);
}]);

// Controllers
app.controller($indexCtrl.name, [...$indexCtrl.annotation, $indexCtrl.controller]);
app.controller($homeCtrl.name, [...$homeCtrl.annotation, $homeCtrl.controller]);

// Directives
app.directive($mLayoutDir.name, [...$mLayoutDir.annotation, $mLayoutDir.directive]);
app.directive($mOnloadedDir.name, [...$mOnloadedDir.annotation, $mOnloadedDir.directive]);

// Components
app.component($mMenuComp.name, $mMenuComp.component);
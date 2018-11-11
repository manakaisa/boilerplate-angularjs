
import $configs from './configs.js';
import $routes from './routes.js';
import $services from './app.services.js';
import $controllers from './app.controllers.js';
import $directives from './app.directives.js';
import $components from './app.components.js';

angular
  // Registeration Modules
  .module($configs.appName, ['ngRoute', $services, $controllers, $directives, $components])
  // Configuration
  .config(['$routeProvider', '$locationProvider', '$compileProvider', '$sceProvider', function ($routeProvider, $locationProvider, $compileProvider, $sceProvider) {
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

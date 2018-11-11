export default angular
  .module('services.$pageInfo', [])
  .factory('$pageInfo', ['$rootScope', function ($rootScope) {
    return {
      get title () { return $rootScope.title; },
      set title (value) { $rootScope.title = value; },
      get description () { return $rootScope.description; },
      set description (value) { $rootScope.description = value; }
    };
  }])
  .name;

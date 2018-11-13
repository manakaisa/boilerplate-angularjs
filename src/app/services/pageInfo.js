export default angular
  .module('services.$pageInfo', [])
  .factory('$pageInfo', ['$rootScope', '$window', '$location', '$timeout', function ($rootScope, $window, $location, $timeout) {
    // Auto Scroll (experimental)]
    // Save scroll position
    $rootScope.$on('$locationChangeStart', (event, newUrl, currentUrl) => {
      $window.sessionStorage.setItem(currentUrl, $window.scrollY);
    });
    // Restore scroll position
    $window.onpopstate = (event) => {
      function scrollToPreviousY (scrollY, delay, timeout, accumulatedTimes) {
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        if ((scrollY + clientHeight) > scrollHeight && timeout > accumulatedTimes) {
          $timeout(scrollToPreviousY, delay, true, scrollY, delay, timeout, (accumulatedTimes + delay));
        } else {
          $window.scrollTo(0, scrollY);
        }
      }
      $timeout(scrollToPreviousY, 100, true, parseInt($window.sessionStorage.getItem($location.absUrl())), 100, 20000, 100);
    };

    return {
      get title () { return $rootScope.title; },
      set title (value) { $rootScope.title = value; },
      get description () { return $rootScope.description; },
      set description (value) { $rootScope.description = value; }
    };
  }])
  .name;

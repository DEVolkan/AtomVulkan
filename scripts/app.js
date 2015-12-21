(function (angular) {
    angular.module('app', ['ngRoute', 'Home', 'gallery', 'angular-inview', 'angular-flexslider', 'ngAnimate']);
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
})(angular);
//var app = angular.module('app', ['ngRoute', 'app.Home', 'app.gallery', 'angular-inview', 'ngAnimate', 'angular-flexslider'])
//
//        .config(function ($routeProvider) {
//            $routeProvider
//                    .when('/', {
//                        templateUrl: 'module/home/view/homeIndex.html',
//                        controller: 'homeController'
//                    })
//                    .when('/gallery', {
//                        templateUrl: 'module/gallery/view/galleryIndex.html',
//                        controller: 'galleryController'
//                    })
//                    .otherwise('/', {
//                        templateUrl: 'module/home/view/index.html',
//                        controller: 'homeController'
//                    });
//        })
//    
(function (angular) {
    angular.module('app', ['ngRoute', 'Home', 'gallery', 'angular-inview', 'angular-flexslider', 'ngAnimate']);
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
})(angular);
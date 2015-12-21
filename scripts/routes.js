(function (angular) {
    angular.module('app')
            .config(function ($routeProvider) {
                $routeProvider
                        .when('/', {
                            templateUrl: 'module/home/view/homeIndex.html',
                            controller: 'homeController'
                        })
                        .when('/gallery', {
                            templateUrl: 'module/gallery/view/galleryIndex.html',
                            controller: 'galleryController'
                        })
                        .otherwise('/', {
                            templateUrl: 'module/home/view/index.html',
                            controller: 'homeController'
                        });
            });
})(angular);
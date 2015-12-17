var app = angular.module('app',['ngRoute','app.Home', 'app.famous','famous.angular', 'ui.router', 'angular-inview', 'ui.bootstrap'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                    templateUrl : 'module/home/view/homeIndex.html',
                    controller  : 'homeController'
            })
            .when('/famous', {
                    templateUrl : 'module/famous/view/famousIndex.html',
                    controller  : 'famousController'
            })
            .otherwise('/', {
                    templateUrl : 'module/home/view/index.html',
                    controller  : 'homeController'
            });
    });
    
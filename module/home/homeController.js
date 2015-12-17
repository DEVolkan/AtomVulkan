angular.module('app.Home', ['ngSanitize'])
.controller('homeController', function($scope, $http, $location) {
    $scope.test = "hallo1";
});
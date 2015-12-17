angular.module('app.Home', ['angular-inview', 'ui.bootstrap'])
.controller('homeController', function($scope, $http, $location) {
    $scope.test = "hallo1";
    $scope.title = false;
    $scope.objectInView = function (index, inview, inviewpart, event) {
        if (inview === true) {
            console.log("true")
            $scope.title = true;
        } else {
            console.log("false")
            $scope.title = false;
        }
    }
});
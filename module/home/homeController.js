angular.module('app.Home', ['angular-inview'])
        .controller('homeController', function ($scope) {
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
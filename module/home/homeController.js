(function (angular) {
    angular.module('Home')
            .controller('homeController', homeController);

    homeController.$inject = ['$scope', 'service', '$sce', '$q'];

    function homeController($scope, service, $sce, $q) {
        $scope.test = "hallo1";
        $scope.title = false;
        $scope.carousel = service.CreateCarousel();

        $scope.objectInView = function (index, inview, inviewpart, event) {
            if (inview === true) {
                console.log("true")
                $scope.title = true;
            } else {
                console.log("false")
                $scope.title = false;
            }
        }

        $scope.showAllSocialMediaInfos = function (){
            console.log(service.CreateCarousel());
        }
    }
    ;
})(angular);
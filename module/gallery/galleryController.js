(function (angular) {
    angular.module('gallery')
            .controller('galleryController', galleryController);

    galleryController.$inject = ['$scope', '$sce', '$q'];
    function galleryController($scope, $sce) {
        $scope.test = "hallo1";
    };
})(angular);
angular.module('app.gallery', ['angular-inview', 'ngAnimate', 'angular-flexslider'])
        .controller('galleryController', function ($scope) {
            $scope.test = "hallo1";
            $scope.mySlides = ["pictures/pic1.jpg", "pictures/pic2.jpg", "pictures/pic3.jpg"];

        });
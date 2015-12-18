angular.module('app.gallery', ['angular-inview', 'ngAnimate', 'angular-flexslider'])
        .controller('galleryController', function ($scope, $sce) {
            $scope.test = "hallo1";
            $scope.slides = [
                {id: 1, type: 'video', url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/ktQqoXa7sc4')},
                {id: 6, type: 'video', url: $sce.trustAsResourceUrl('//i.ytimg.com/vi/ktQqoXa7sc4/maxresdefault.jpg')},
                {id: 2, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg'},
                {id: 3, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg'},
                {id: 4, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg'},
                {id: 5, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'},
            ];

        });
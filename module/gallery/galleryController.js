angular.module('app.gallery', ['angular-inview', 'ngAnimate', 'angular-flexslider'])
        .controller('galleryController', function ($scope, $sce) {
            $scope.test = "hallo1";
            $scope.mySlides = ["pictures/pic1.jpg", "pictures/pic2.jpg", "pictures/pic3.jpg"];


//            $scope.slideshow = {}
//            $scope.slideshow.slides = [
//                'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
//                'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
//                'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
//                'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
//            ];
//            var logId = 0;
//            $scope.slideshow.log = []
//            $scope.slideshow.start = function (slider) {
//                console.log(slider);
//                $scope.slideshow.log.push({id: ++logId, message: 'start'});
//            }
//            $scope.slideshow.before = function () {
//                $scope.slideshow.log.push({id: ++logId, message: 'before'});
//            }
//            $scope.slideshow.after = function () {
//                $scope.slideshow.log.push({id: ++logId, message: 'after'});
//            }
//            $scope.slideshow.end = function () {
//                $scope.slideshow.log.push({id: ++logId, message: 'end'});
//            };
            $scope.slides = [
                {id: 1, type: 'video', url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/ktQqoXa7sc4')},
                {id: 2, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg'},
                {id: 3, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg'},
                {id: 4, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg'},
                {id: 5, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'},
            ];

        });
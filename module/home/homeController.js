angular.module('app.Home', ['angular-inview', 'ngAnimate', 'angular-flexslider'])
        .controller('homeController', function ($scope, $sce, $http, $q) {
            $scope.test = "hallo1";
            $scope.title = false;
            $scope.SocialMediaInfos;
            
            $scope.objectInView = function (index, inview, inviewpart, event) {
                if (inview === true) {
                    console.log("true")
                    $scope.title = true;
                } else {
                    console.log("false")
                    $scope.title = false;
                }
            }
            
            $scope.showAllSocialMediaInfos = function () {
                console.log($scope.SocialMediaInfos);
            }
            
            $scope.slides = [
                {id: 1, type: 'video', url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/ktQqoXa7sc4')},
                {id: 2, type: 'image', url: $sce.trustAsResourceUrl('//i.ytimg.com/vi/ktQqoXa7sc4/maxresdefault.jpg')},
                {id: 3, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg'},
                {id: 4, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg'},
                {id: 5, type: 'image', url: 'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg'},
            ];
            
            function getAllSocialMediaInfo() {
                var defer = $q.defer();
                $http.get("content.json").success(function (data) {
                    $scope.SocialMediaInfos = data;
                    defer.resolve(data);
                }).error(function (data) {
                    defer.reject(data);
                });
                return defer.promise;
            }
            getAllSocialMediaInfo();
        });
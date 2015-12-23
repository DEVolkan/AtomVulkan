(function (angular) {
    angular.module('app')
            .factory('service', function ($http, $q, $filter) {
                var service = {
                    loadData: loadData,
                    CreateCarousel: CreateCarousel,
                    SocialMediaInfos: [],
                };

                function loadData() {
                    var deferred = $q.defer();
                    $http.get("content.json").success(function (data) {
                        service.SocialMediaInfos = data;
                        deferred.resolve(data);
                    }).error(function (data) {
                        deferred.reject(data);
                    });
                    return deferred.promise;
                }

                service.GroupBy = function (theArray, sortItem) {
                    
//                    console.log(theArray.SocialMedia);
//                    console.log(theArray.SocialMedia);
//                    return theArray.SocialMedia.sort(function(a, b){return b-a});
//                    var points = [40, 100, 1, 5, 25, 10];
//                    console.log(points);
//                    points.sort(function (a, b) {
//                        return b - a
//                    });
//                    console.log(points);
                };

                function CreateCarousel() {

//                    var carousel = service.SocialMediaInfos;
//                    carousel.SocialMedia.forEach(function (item) {
//                        console.log(item);
//                    });
                }
                ;
                return service;
            });
})(angular);
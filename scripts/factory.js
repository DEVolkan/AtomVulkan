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

                service.OrderBy = function (theArray, sortItem) {
                    console.log(alasql('SELECT * FROM ? ORDER BY '+ sortItem +' DESC', [theArray.SocialMedia]));
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
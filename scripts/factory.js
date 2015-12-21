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
                
                function CreateCarousel(){
                    var carousel = service.SocialMediaInfos;
                    carousel.SocialMedia.forEach(function (item) {
                        console.log(item);
                    });
                };
                return service;
            });
})(angular);
(function (angular) {
    angular.module('app')
            .factory('service', function ($http, $q, $filter) {
                var service = {
                    loadData: loadData,
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
                return service;
            });
})(angular);
(function (angular) {
    angular.module('app')
            .factory('service', function ($http, $q, $filter) {
                var service = {
                    loadData: loadData,
                    SocialMediaInfos: [1,2],
                };

                function loadData() {
                    var deferred = $q.defer();
                    console.log("factory");
                        $http.get("content.json").success(function (data) {
                            service.SocialMediaInfos = data;
                             console.log(service.SocialMediaInfos);
                            deferred.resolve(data);
                        }).error(function (data) {
                            deferred.reject(data);
                        });
                    return deferred.promise;
                }
                return service;
            });
})(angular);
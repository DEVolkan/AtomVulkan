(function (angular) {
    angular.module('app')
            .directive('clickLink', ['$window', function ($window) {
                    return {
                        link: function (scope, element, attrs) {
                            element.on('click', function () {
                                scope.$apply(function () {
                                    $window.open(attrs.clickLink, '_blank');
                                });
                            });
                        }
                    }
                }])
            .factory('service', function ($http, $q, $sce) {
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

                service.OrderBy = function (arrayToSort, sortItem, secondSortItem) {
                    if (secondSortItem !== null) {
                        arrayToSort = alasql('SELECT * FROM ? ORDER BY ' + sortItem + ' DESC,' + secondSortItem + ' DESC', [arrayToSort.SocialMedia]);
                    } else {
                        arrayToSort = alasql('SELECT * FROM ? ORDER BY ' + sortItem + ' DESC', [arrayToSort.SocialMedia]);
                    }
                    return arrayToSort;
                };

                function CreateCarousel() {
                    var zwischenArray = alasql('SELECT TOP 5 * FROM ?', [service.OrderBy(service.SocialMediaInfos, "datum", "uhrzeit")]);
                    var returnArray = [];
                    zwischenArray.forEach(function (item) {
                        if (item.type === "video") {
                            item.id = $sce.trustAsResourceUrl(item.id);
                        }
                        returnArray.push(item);
                    });
                    return returnArray;
                }
                ;
                return service;
            });
})(angular);
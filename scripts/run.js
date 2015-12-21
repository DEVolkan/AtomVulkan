(function (angular) {
    angular.module('app')
            .run(["service", function (service) {
                    console.log("run")
                    return service.loadData();
                }]);
})(angular);
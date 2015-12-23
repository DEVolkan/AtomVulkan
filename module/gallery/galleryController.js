(function (angular) {
    angular.module('gallery')
            .controller('galleryController', galleryController);

    galleryController.$inject = ['$scope'];
    function galleryController($scope) {
        $scope.test = "hallo1";

        $scope.MyData = [{income: 1000}, {income: 2000},
            {income: 1200}, {income: 4500},
            {income: 3300}, {income: 200},
            {income: 4500}, {income: 2300}];

        $scope.avgIncome = function () {
            return alasql('SELECT VALUE AVG(income) FROM ?', [$scope.MyData]);
        };

        $scope.addValue = function () {
            $scope.MyData.push({income: (Math.random() * 1000) | 0});
        }
    }
    ;
})(angular);
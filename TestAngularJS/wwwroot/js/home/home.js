var home = angular.module('myNinjaAppHome', ['ngRoute','ngAnimate']);

home.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    //Fire before application runs

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/home', {
            templateUrl: 'Home/Dashboard',
            controller: 'DashboardController'            
        })
        .when('/ninjas', {
            templateUrl: 'Home/Ninjas',
            controller: 'NinjaController'
        })
        .when('/contact', {
            templateUrl: 'Home/Contact',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'Home/ContactSuccess'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

home.directive('randomNinja', [function () {

    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        templateUrl: 'Home/RandomNinja',
        transclude: true,
        replace: true,
        controller: function ($scope) {
            $scope.random = Math.floor(Math.random() * 4);
        }
    };

}]);

home.controller('NinjaController', ['$scope', '$http', function ($scope, $http) {

    $scope.removeNinja = function (ninja) {
        var removedNinjaIndex = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinjaIndex, 1);
    }

    $scope.removeAll = function () {       
        $scope.ninjas = [];
    }

    $scope.addNinja = function () {
        $scope.ninjas.push({
            name: $scope.newNinja.name,
            belt: $scope.newNinja.belt,
            rate: parseInt($scope.newNinja.rate),
            available: true,
            thumbnail: ""
        });

        $scope.newNinja.name = "";
        $scope.newNinja.belt = "";
        $scope.newNinja.rate = "";
    }

    var url = "https://localhost:7030/data/ninjas.json";
    $http.get(url).then(function (data) {
        $scope.ninjas = data.data;
    });

}]);

home.controller('DashboardController', ['$scope', '$http', function ($scope, $http) {
      
    var url = "https://localhost:7030/data/ninjas.json";
    $http.get(url).then(function (data) {
        $scope.ninjas = data.data;
    });

}]);

home.controller('ContactController', ['$scope', '$location', function ($scope, $location) {

    $scope.sendMessage = function () {
        $location.path('/contact-success');
    }

}]);
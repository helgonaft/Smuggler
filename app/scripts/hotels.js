angular.module('myproject').controller('HotelsCtrl', function ($http, $state, $scope, $stateParams, $localStorage, $rootScope, $window){
    
    $scope.hotelsList = [];

    

        var promise = $http.get('https://www.server1430.com:38443/bookingengine/bookingservice/fetchPropertyDtoList');
        promise.success(function (data, status, headers) {
            if (data.response !== undefined) {
                // NotificationService.error(data.message);
            }
            $scope.hotelsList = data;
            console.log($scope.hotelsList);
        });
        promise.error(function (data, status, headers) {
            if (status === 401) {
                // NotificationService.error("Session expired, please login again");
            } else if (status === 200) {
                // NotificationService.error("Cannot fetch unpaid invoice for account. Please try after some time");
            }
        });

   
});
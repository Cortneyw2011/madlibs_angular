var app = angular.module('madlibs');

app.controller ('displayCtrl', function($scope, madlibFactory){

  $scope.data = madlibFactory.getData();

});

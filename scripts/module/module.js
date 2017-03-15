//initialize module
var app = angular.module('madlibs', ['ngRoute']);

//configures paths

app.config(function($routeProvider, $locationProvider){

$routeProvider
//input page
.when('/userinput',{
  controller: 'inputCtrl',
  templateUrl:'views/displayLibs.html'
});

$locationProvider.hashPrefix('');

});

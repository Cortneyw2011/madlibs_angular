var app = angular.module('madlibs');

app.controller ('inputCtrl', function($scope, madlibFactory){

$scope.getInfo = function (person, adjective, pronoun, noun2, adjective2, place, color, verb, preposition){
  madlibFactory.setData (person, adjective, pronoun, noun2, adjective2, place, color, verb, preposition);
}

});

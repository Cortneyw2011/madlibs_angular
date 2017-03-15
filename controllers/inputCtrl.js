var app = angular.module('madlibs');

app.controller ('inputCtrl', function($scope){

 $scope.userObject = [{input: 'person'}, {input: 'adjective'}, {input:'he or she'}, {input: 'noun'}, {input: 'adjective2'}, {input:'place'}, {input: 'color'}, {input:'verb-ing'}, {input: 'preposition'}];

});

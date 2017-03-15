var app = angular.module('madlibs');

App.factory('madlibFactory', function(userObject) {

  var data = {};
  return {
    setData:setData,
    getData:getData
  };
});

function setData(person, adjective, pronoun, noun2, adjective2, place, color, verb, preposition){
  data.person = person;
  data.adjective = adjective;
  data.pronoun = pronoun;
  data.noun2 = noun2;
  data.adjective2 = adjective2;
  data.place = place;
  data.color = color;
  data.verb = verb;
  data.preposition = preposition;

}

function getData(){
  return data;
}

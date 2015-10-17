if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

questionOrder = function(participantId) {
  var questions = _.range(10);
  var chanceSeeded = new Chance(participantId);

  return chanceSeeded.shuffle(questions);
}

Template.registerHelper('participant', function() {
  return Session.get('participantId');
});

Template.registerHelper('currentQuestionNumber', function() {
  return Session.get('currentQuestionNumber');
});

Template.registerHelper('getQuestion', function(questionNumber) {
  var qOrder = questionOrder(Session.get('participantId'));
  return qOrder[questionNumber];
});

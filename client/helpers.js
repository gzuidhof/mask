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

Template.registerHelper('getQuestionString', function(questionNumber) {
  var qOrder = questionOrder(Session.get('participantId'));
  return JSON.stringify(qOrder[questionNumber]);
});

Template.registerHelper('getQuestionImagePath', function(questionNumber) {
  var qOrder = questionOrder(Session.get('participantId'));
  var question = qOrder[questionNumber];

  var qName = "Base"+question.base;
  qName += "Eyes"+question.eyes;
  qName += "Nose"+question.nose;
  qName += "mouth"+question.mouth;

  var path = 'img/' + qName;
  console.log("Q:"+questionNumber+"/"+(N_QUESTIONS-1), qName);
  return path;
});

Template.registerHelper('questionnaireIsDone', function() {
  var questionNumber = Session.get('currentQuestionNumber');;
  var qOrder = questionOrder(Session.get('participantId'));
  var nQuestions = N_QUESTIONS;

  return questionNumber >= nQuestions;
});

Template.registerHelper('nQuestions', function() {
  return N_QUESTIONS;
});

Template.registerHelper('add', function(a,b) {
  return a+b;
});

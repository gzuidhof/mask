  Template.question.events({

    'submit form': function(event, template){
      event.preventDefault();

      var questionNumber = template.data.questionNumber;
      var question = questionOrder(Session.get('participantId'))[questionNumber];

      var response = {
        participantId: Session.get('participantId'),
        questionNumber: questionNumber,
        question: question,
        likability: event.target.likability.value,
      }

      console.log("Submitting response", response);
      Responses.insert(response);

      Session.set('currentQuestionNumber', questionNumber+1);

      return false;
    }
  });

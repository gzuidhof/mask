  Template.question.events({

    'submit form': function(event, template){
      event.preventDefault();

      var questionNumber = template.data.questionNumber;
      var question = questionOrder(Session.get('participantId'))[questionNumber];

      var response = {
        participantId: Session.get('participantId'),
        questionNumber: questionNumber,
        likability: event.target.likability.value,
      }

      for (var key in question) { //Add nose eyes etc.
        if (question.hasOwnProperty(key)) {
            response[key] = question[key];
        }
      }


      console.log("Submitting response", response);
      Responses.insert(response);

      Session.setPersistent('currentQuestionNumber', questionNumber+1);

      return false;
    }
  });

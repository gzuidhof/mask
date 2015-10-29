  Template.question.events({

    'submit form': function(event, template){
      event.preventDefault();

      var questionNumber = template.data.questionNumber;
      var question = questionOrder(Session.get('participantId'))[questionNumber];

      var element = template.find('input:radio[name=lika]:checked');

      if (!element) {
          template.find("#error-text").innerHTML = "Please select a value";
      }
      else {
        template.find("#error-text").innerHTML = "";
        var likability = element.value;
        element.checked = false;
        element.parentElement.className = 'btn btn-default';

        var response = {
          participantId: Session.get('participantId'),
          questionNumber: questionNumber,
          likability: likability,
        }



        for (var key in question) { //Add nose eyes etc.
          if (question.hasOwnProperty(key)) {
              response[key] = question[key];
          }
        }


        console.log("Submitting response", response);
        Responses.insert(response);
        Session.setPersistent('currentQuestionNumber', questionNumber+1);
      }




      return false;
    }
  });

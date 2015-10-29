if (Meteor.isClient){

  Template.startQuestionnaire.events({

    'submit form': function(event, template){
      event.preventDefault();

      var participant = {
        name: event.target.name.value,
        age: event.target.age.value
      }

      console.log("Submitting questionnaire", participant);

      Participants.insert(participant, function(error, id) {
        Session.setPersistent('participantId', id);
        Session.setPersistent('currentQuestionNumber', 0);
        console.log("Participant ID: ", id);
      }
      );
      return false;
    }
  });

}

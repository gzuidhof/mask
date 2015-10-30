if (Meteor.isClient){

  Template.startQuestionnaire.events({

    'submit form': function(event, template){
      event.preventDefault();

      var familiarity = template.find('input:radio[name=fam]:checked');
      var consent = template.find("#consent").checked;

      var participant = {
        age: event.target.age.value,
        gender: event.target.gender.value.toLowerCase(),
        familiarity: familiarity ? familiarity.value : -1,
        consent: consent,
        date: new Date(),
        userAgent: navigator.userAgent
      }
      console.log("Validating questionnaire: ", participant);
      var errorElement = template.find("#error-text-pre");

      if (!participant.gender) {
        errorElement.innerHTML = "Please enter your gender";
        return false;
      }

      if (!participant.age || participant.age < 18) {
        errorElement.innerHTML = "You must be at least 18 years of age to participate.";
        return false;
      }

      if (participant.familiarity == -1) {
        errorElement.innerHTML = "Please enter a familiarity rating";
        return false;
      }

      if (!participant.consent) {
        errorElement.innerHTML = "You can not participate without informed consent.";
        return false;
      }

      errorElement.innerHTML = "";

      console.log("Succesfully validated, submitting questionnaire");
      Participants.insert(participant, function(error, id) {
        Session.setPersistent('participantId', id);
        Session.setPersistent('currentQuestionNumber', 0);
        console.log("Participant ID: ", id);
      });

      return false;
    }
  });

}

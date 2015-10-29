Template.afterQuestionnaire.events({

  'submit form': function(event, template){
    event.preventDefault();

    Session.clear();

    return false;
  }
});

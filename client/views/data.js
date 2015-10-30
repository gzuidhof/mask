Template.data.helpers({

  "participantsData": function(){
    return JSON.stringify(Participants.find({}).fetch());
  },

  "participantsN": function(){
    return Participants.find({}).count();
  },

  "responsesData": function(){
    return JSON.stringify(Responses.find({}).fetch());
  },

  "responsesN": function(){
    return Responses.find({}).count();
  },

});

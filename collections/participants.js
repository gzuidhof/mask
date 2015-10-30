Participants = new Mongo.Collection('participants');

if (Meteor.isServer) {
  Participants.allow({
    insert: function(){return true;}
  });
}

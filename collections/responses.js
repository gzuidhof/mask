Responses = new Mongo.Collection('responses');

if (Meteor.isServer) {
  Responses.allow({
    insert: function(){return true;}
  });
}

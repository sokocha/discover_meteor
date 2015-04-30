Errors = new Meteor.Collection(null);

throwError = function(message) {
  Errors.insert({mesage: message});
}
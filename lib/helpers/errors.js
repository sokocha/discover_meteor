Errors = new Meteor.Collection(null);

throwError = function(message) {
  Errors.insert({mesage: message});
}

clearErrors = function(){
  Errors.remove({seen: true});
}
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function(){
    return Meteor.subscribe('posts');}
});


Router.map(function () {
  this.route('/', {name: 'postsList'});

  this.route('/posts/:_id', {name: 'postPage', data: function(){ return Posts.findOne(this.params._id);}})

  this.route('postSubmit', {path: '/submit'});

});


Meteor.startup(function () {
  Template.featured_posts_magellan.helpers({
    featured: function(){
      return Posts.find({sticky: true});
    }
  });
});

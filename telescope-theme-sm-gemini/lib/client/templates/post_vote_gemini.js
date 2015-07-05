Template.post_vote.helpers({
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.upvoters, user._id);
  }
});

Template.post_vote.events({
  'click .upvote-link': function(e){
    var post = this;
    e.preventDefault();
    if(!Meteor.user()){
      Router.go('atSignIn');
      Messages.flash(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('upvotePost', post, function(){
      Events.track("post upvoted", {'_id': post._id});
    });
  }
});
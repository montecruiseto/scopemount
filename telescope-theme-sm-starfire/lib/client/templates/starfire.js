Template.starfire.helpers({
  postLink: function(){
    return !!this.url ? Posts.getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  },
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.upvoters, user._id);
  },
  sourceLink: function(){
    return !!this.url ? this.url : Telescope.utils.getSiteUrl() + "posts/"+this._id;
  },
  viaTwitter: function () {
    return !!Settings.get('twitterAccount') ? 'via='+Settings.get('twitterAccount') : '';
  }
});

Template.starfire.events({
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

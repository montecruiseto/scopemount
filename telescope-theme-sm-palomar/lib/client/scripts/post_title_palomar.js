Template.post_title.onRendered(function() {
    // Call the Trunk8 jQuery plugin on the post titles
    console.log('rendered');
    this.$('.post-title').trunk8({
        lines: 2
    });
});

Meteor.startup(function() {
    /* Handle browser resize too */
    $(window).resize(function (e) {
    	console.log('yep');
      $('.post-title').trunk8();
    });
});

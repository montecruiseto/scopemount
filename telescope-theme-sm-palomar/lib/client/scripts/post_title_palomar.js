Template.post_title.onRendered(function() {
    // Call the Trunk8 jQuery plugin on the post titles
    this.$('.post-title').trunk8({
        lines: 3
    });
});


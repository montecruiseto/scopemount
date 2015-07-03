Template.post_title.onRendered(function() {
    // Call the Succinct plugin on the post titles
    $('.post-title').succinct({
           size: 75
       });
    $('.right-column .post-title').succinct({
           size: 55
       });
});

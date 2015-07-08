Template.post_item.onRendered(function() {
    // Set a random color for each new post item
    $(this.find('.laval-post')).css('background', randomColor({
        luminosity: 'bright',
        hue: 'blue'
    }));
});

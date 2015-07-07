Template.post_item.onRendered(function() {
    // Set a random color for each Post item
    var swatches = document.querySelectorAll(".laval-post");
    for (var i in swatches) {
        var swatch = swatches[i];
        var color = randomColor({
            luminosity: 'light'
        });
        console.log(color);
        if (swatch.style) {
            swatch.style.background = color;
        }
    }
});

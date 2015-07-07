Template.post_item.onRendered(function() {
    // Set a random color for each new post item
      // var swatches = document.querySelectorAll(".laval-post");
      // console.log(swatches);
      // for (var i in swatches) {
      //     var swatch = swatches[i];
      //     var color = randomColor({
      //         luminosity: 'bright',
      //         hue: 'blue'
      //     });
      //     if (swatch.style) {
      //         swatch.style.background = color;
      //     }
      // }
      // var color = randomColor({
      //     luminosity: 'bright',
      //     hue: 'blue'
      // });
      var swatch = $(this).find('.laval-post');
      console.log(swatch);

      // for (var i in swatches) {
      //     var swatch = swatches[i];

      //     if (swatch.style) {
      //         swatch.style.background = color;
      //     }
      // }

      // var renderedPosts = document.querySelectorAll(".laval-post");
      // console.log(renderedPosts);
      // renderedPosts.className = ".laval-post-rendered";
      // document.querySelectorAll(".laval-post").className = ".laval-post-rendered";
});

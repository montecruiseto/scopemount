/**
 * Remove sticky sorting from "New" view
 */
Posts.views.add("new", function (terms) {
  return {
    options: {sort: {postedAt: -1}}
  };
});

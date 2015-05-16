Telescope.modules.remove("postComponents", "postRank");
Telescope.modules.remove("postComponents", "postUpvote");
Telescope.modules.remove("postComponents", "postContent");
Telescope.modules.remove("postComponents", "postAvatars");
Telescope.modules.remove("postComponents", "postDiscuss");
Telescope.modules.remove("postComponents", "postActions");

Telescope.modules.register("postComponents", [
  {
    template: 'postUpvote',
    order: 10
  },
  {
    template: 'postContent',
    order: 20
  }
]);

Telescope.modules.remove("postHeading", "post_title");
Telescope.modules.remove("postHeading", "postDomain");
Telescope.modules.remove("postHeading", "postCategories");

Telescope.modules.register("postHeading", [

  {
    template: 'post_title',
    order: 10
  },
  {
    template: 'postDomain',
    order: 20
  },
  {
    template: 'postInfo',
    order: 30
  },
  {
    template: 'postCommentsLink',
    order: 40
  },
  {
    template: 'postCategories',
    order: 50
  },
  {
    template: 'postAdmin',
    order: 60
  }

]);

Telescope.modules.remove("postMeta", "postCommentsLink");
Telescope.modules.remove("postMeta", "postInfo");
Telescope.modules.remove("postMeta", "postAuthor");
Telescope.modules.remove("postMeta", "postAdmin");

Telescope.modules.register("postMeta", [

  {
    template: 'postAvatars',
    order: 10
  },
  {
    template: 'postDiscuss',
    order: 20
  }

]);

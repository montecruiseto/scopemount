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
  },
  {
    template: 'postRank',
    order: 30
  }
]);

Telescope.modules.remove("postMeta", "postCommentsLink");
Telescope.modules.remove("postMeta", "postInfo");
Telescope.modules.remove("postMeta", "postAuthor");
Telescope.modules.remove("postMeta", "postAdmin");

Telescope.modules.register("postMeta", [
  {
    template: 'postCommentsLink',
    order: 10
  },
  {
    template: 'postInfo',
    order: 20
  },
  {
    template: 'postAuthor',
    order: 30
  },
  {
    template: 'postAdmin',
    order: 40
  }
]);

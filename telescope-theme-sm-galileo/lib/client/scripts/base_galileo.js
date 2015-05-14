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

Telescope.modules.register("postHeading", [
  {
    template: 'post_title',
    order: 10
  },
  {
    template: 'postDomain',
    order: 20
  }
]);

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

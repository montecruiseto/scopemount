Telescope.modules.removeAll("postComponents");
Telescope.modules.add("postComponents", [
  {
    template: 'post_vote',
    order: 10
  },
  {
    template: 'post_content',
    order: 20
  }
]);

Telescope.modules.removeAll("postHeading");
Telescope.modules.add("postHeading", [
  {
    template: 'post_categories',
    order: 10
  },
  {
    template: 'post_title',
    order: 20
  }
]);

Telescope.modules.removeAll("postMeta");
Telescope.modules.add("postMeta", [
  {
    template: 'post_info',
    order: 10
  },
  {
    template: 'post_comments_link',
    order: 20
  },
  {
    template: 'post_admin',
    order: 30
  }
]);

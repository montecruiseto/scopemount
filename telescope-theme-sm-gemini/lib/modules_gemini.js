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
    template: 'post_title',
    order: 10
  },
  {
    template: 'post_domain',
    order: 20
  },
  {
    template: 'post_info',
    order: 30
  },
  {
    template: 'post_comments_link',
    order: 40
  },
  {
    template: 'post_categories',
    order: 50
  },
  {
    template: 'post_admin',
    order: 60
  }

]);

Telescope.modules.removeAll("postMeta");
Telescope.modules.add("postMeta", [

  {
    template: 'post_avatars',
    order: 10
  },
  {
    template: 'post_discuss',
    order: 20
  }

]);

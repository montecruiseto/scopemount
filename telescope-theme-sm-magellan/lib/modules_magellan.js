Telescope.modules.removeAll("postComponents");
Telescope.modules.add("postComponents", [
  {
    template: 'post_vote',
    order: 10
  },
  {
    template: 'post_content',
    order: 30
  }
]);

Telescope.modules.removeAll("postHeading");
Telescope.modules.add("postHeading", [

  {
    template: 'post_title',
    order: 10
  },
  {
    template: 'post_comments_link',
    order: 20
  },
  {
    template: 'post_info',
    order: 30
  },
  {
    template: 'post_author',
    order: 40
  },
  {
    template: 'post_admin',
    order: 60
  }

]);

Telescope.modules.removeAll("postMeta");

Telescope.modules.removeAll("primaryNav");
Telescope.modules.add("primaryNav", {
  template: 'search',
  order: 100
});


Telescope.modules.add("magellanSidebar", [
  {
    template: 'categories_magellan',
    order: 10
  },
  {
    template: 'featured_posts_magellan',
    order: 30
  },
  {
    template: 'sponsor_magellan',
    order: 40
  }
]);

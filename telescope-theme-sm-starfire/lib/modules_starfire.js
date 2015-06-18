Telescope.modules.removeAll("postComponents");
Telescope.modules.add("postComponents", [
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
  }
]);

Telescope.modules.removeAll("postMeta");
Telescope.modules.add("postMeta", [
  {
    template: 'post_info',
    order: 20
  },
  {
    template: 'post_author',
    order: 30
  },
  {
    template: 'post_admin',
    order: 40
  }
]);

Telescope.modules.add("starfireButtons", [
  {
    template: 'starfire',
    order: 30
  }
]);

Telescope.modules.removeAll("primaryNav");
Telescope.modules.add("primaryNav", [
  {
    template: 'logo',
    order: 10
  }
]);

Package.describe({
  name: "montecruiseto:telescope-theme-sm-colossus",
  summary: "Telescope Scopemount: Colossus theme package",
  version: "0.1.1",
  git: "https://github.com/montecruiseto/scopemount.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
      // core dependencies
      'telescope:core@0.21.1',
      'telescope:theme-base@0.21.1'
    ]);

  api.addFiles([
      'lib/modules_colossus.js'
  ], ['client', 'server']);

  api.addFiles([

      // partials
      'lib/client/scss/partials/_typography.scss',
      'lib/client/scss/partials/_grid.scss',
      'lib/client/scss/partials/_mixins.scss',
      'lib/client/scss/partials/_colors.scss',

      // globals
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_links.scss',
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_markdown.scss',

      // modules
      'lib/client/scss/modules/_avatars.scss',
      'lib/client/scss/modules/_comments.scss',
      'lib/client/scss/modules/_layout.scss',
      'lib/client/scss/modules/_menu.scss',
      'lib/client/scss/modules/_nav.scss',
      'lib/client/scss/modules/_mobile_nav.scss',
      'lib/client/scss/modules/_posts.scss',
      'lib/client/scss/modules/_search.scss',
      'lib/client/scss/modules/_errors.scss',

      // screen
      'lib/client/scss/screen.scss',

      // overrides
      'lib/client/templates/post_page_colossus.html',
      'lib/client/templates/post_content_colossus.html',
      'lib/client/templates/post_info_colossus.html',
      'lib/client/templates/post_item_colossus.html',

      // customizations
      'lib/client/scripts/post_body_colossus.js',
      'lib/client/scripts/icons_colossus.js',
      'lib/client/scripts/templates_colossus.js',

      //plugins
      'lib/client/scripts/succinct.js'

    ], ['client']);

});

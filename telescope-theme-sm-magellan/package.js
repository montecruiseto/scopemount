Package.describe({
  name: "montecruiseto:telescope-theme-sm-magellan",
  summary: "Telescope Scopemount: Magellan theme package",
  version: "0.1.0",
  git: "https://github.com/montecruiseto/scopemount.git"
});

Package.onUse(function (api) {

  api.use([
      // core dependencies
      'telescope:core@0.20.6',
      'telescope:theme-base@0.20.6',
      'telescope:theme-hubble@0.20.6'
    ]);

  api.addFiles([
      'lib/modules_magellan.js'
  ], ['client', 'server']);

  api.addFiles(
    [
      // globals
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_links.scss',

      // modules
      'lib/client/scss/modules/_avatars.scss',
      'lib/client/scss/modules/_comments.scss',
      'lib/client/scss/modules/_errors.scss',
      'lib/client/scss/modules/_layout.scss',
      'lib/client/scss/modules/_nav.scss',
      'lib/client/scss/modules/_mobile_nav.scss',
      'lib/client/scss/modules/_posts.scss',
      'lib/client/scss/modules/_search.scss',
      'lib/client/scss/modules/_user-profile.scss',
      'lib/client/scss/modules/_users.scss',

      // partials
      'lib/client/scss/partials/_colors.scss',
      'lib/client/scss/partials/_grid.scss',
      'lib/client/scss/partials/_typography.scss',

      // screen
      'lib/client/scss/screen.scss',

      // overrides
      'lib/client/templates/post_info_magellan.html',
      'lib/client/templates/layout_magellan.html',

      // customizations
      'lib/client/templates/categories_magellan.html',
      'lib/client/templates/featured_posts_magellan.html',
      'lib/client/templates/sponsor_magellan.html',
      'lib/client/scripts/icons_magellan.js',
      'lib/client/scripts/templates_magellan.js'

    ],
    'client'
  );

});

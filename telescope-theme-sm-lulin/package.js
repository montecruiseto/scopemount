Package.describe({
  name: "montecruiseto:telescope-theme-sm-lulin",
  summary: "Telescope Scopemount: Lulin theme package",
  version: "0.1.0",
  git: "https://github.com/montecruiseto/scopemount.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
      // core dependencies
      'telescope:core@0.20.4',
      'telescope:theme-base@0.20.4',
      'telescope:theme-hubble@0.20.4',
    ]);

  api.addFiles([
      'lib/modules_lulin.js'
  ], ['client', 'server']);

  api.addFiles([

      // add-ons
      'lib/client/main.html',

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

      // partials
      'lib/client/scss/partials/_typography.scss',
      'lib/client/scss/partials/_grid.scss',
      'lib/client/scss/partials/_colors.scss',

      // screen
      'lib/client/scss/screen.scss',

      // overrides
      'lib/client/templates/post_content_lulin.html',
      'lib/client/templates/post_info_lulin.html',
      'lib/client/templates/post_upvote_lulin.html',
      'lib/client/templates/post_page_lulin.html',

      // customizations
      'lib/client/scripts/post_title_lulin.js',
      'lib/client/scripts/icons_lulin.js',
      'lib/client/scripts/templates_lulin.js',

      //plugins
      'lib/client/scripts/succinct.js'

    ], ['client']);

});

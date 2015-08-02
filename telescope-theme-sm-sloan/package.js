Package.describe({
  name: "montecruiseto:telescope-theme-sm-sloan",
  summary: "Telescope Scopemount: Sloan theme package",
  version: "0.1.7",
  git: "https://github.com/montecruiseto/scopemount.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
      // core dependencies
      'telescope:core@0.21.1',
      'telescope:theme-base@0.21.1',
      'telescope:theme-hubble@0.21.1'
    ]);

  api.addFiles([
      'lib/modules_sloan.js'
  ], ['client', 'server']);

  api.addFiles([
      // globals
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_links.scss',
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_markdown.scss',

      // modules
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
      'lib/client/templates/post_categories_sloan.html',
      'lib/client/templates/post_content_sloan.html',
      'lib/client/templates/post_info_sloan.html',
      'lib/client/templates/post_vote_sloan.html',
      'lib/client/templates/post_vote_sloan.js',
      'lib/client/templates/post_page_sloan.html',

      // customizations
      'lib/client/scripts/icons_sloan.js',
      'lib/client/scripts/templates_sloan.js'

    ], ['client']);

});

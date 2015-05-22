Package.describe({
  name: "montecruiseto:telescope-theme-sm-galileo",
  summary: "Telescope Scopemount: Galileo theme package",
  version: "0.1.1",
  git: "https://github.com/montecruiseto/scopemount.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
      // core dependencies
      'telescope:core@0.20.4',
      'telescope:theme-base@0.20.4',
      'telescope:theme-hubble@0.20.4'
    ]);

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  api.addFiles([
      'lib/modules_galileo.js'
  ], ['client', 'server']);

  api.addFiles([
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
      'lib/client/templates/post_content_galileo.html',
      'lib/client/templates/post_domain_galileo.html',
      'lib/client/templates/post_info_galileo.html',
      'lib/client/templates/post_upvote_galileo.html',
      'lib/client/templates/post_page_galileo.html',

      // customizations
      'lib/client/scripts/icons_galileo.js',
      'lib/client/scripts/templates_galileo.js'

    ], ['client']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});

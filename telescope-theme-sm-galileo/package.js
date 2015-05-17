Package.describe({
  name: "telescope:theme-sm-galileo",
  summary: "Telescope Scopemount:Galileo theme package",
  version: "0.1.0",
  git: "https://github.com/montecruiseto/scopemount.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
      // core dependencies
      'telescope:core@0.1.0',
      'telescope:theme-hubble@0.1.0'
    ]);

  api.addFiles([
      'lib/modules_galileo.js'
  ], ['client', 'server']);

  api.addFiles([
      // globals
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_links.scss',

      // modules
      'lib/client/scss/modules/_comments.scss',
      'lib/client/scss/modules/_layout.scss',
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

});

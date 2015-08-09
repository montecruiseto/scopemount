Package.describe({
  name: "montecruiseto:telescope-theme-sm-gemini",
  summary: "Telescope Scopemount: Gemini theme package",
  version: "0.1.12",
  git: "https://github.com/montecruiseto/scopemount.git"
});

Package.onUse(function (api) {

  api.use([
      // core dependencies
      'telescope:core@0.22.2',
      'telescope:theme-base@0.22.2',
      'telescope:theme-hubble@0.22.2'
    ]);

  api.addFiles([
      'lib/modules_gemini.js'
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
      'lib/client/templates/nav_gemini.html',
      'lib/client/templates/post_info_gemini.html',
      'lib/client/templates/post_vote_gemini.html',
      'lib/client/templates/post_vote_gemini.js',

      // customizations
      'lib/client/scripts/icons_gemini.js',
      'lib/client/scripts/templates_gemini.js',

      // images
      'img/header-bg.jpg'

    ],
    'client'
  );

});

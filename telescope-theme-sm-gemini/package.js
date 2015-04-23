Package.describe({
  summary: "Telescope scopemount-gemini theme",
  version: '0.1.0',
  name: "telescope-theme-sm-gemini"
});

Package.onUse(function (api) {

  api.use(
    [
      'templating',
      'telescope-lib',
      'telescope-base',
      'telescope-theme-hubble',
      'fourseven:scss'
    ],
    ['client', 'server']
  );

  api.addFiles([
    //
    ], ['client', 'server']);

  api.addFiles(
    [
      // globals
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_links.scss',

      // modules
      'lib/client/scss/modules/_avatars.scss',
      'lib/client/scss/modules/_comments.scss',
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

      // customizations
      'lib/client/scripts/base_gemini.js',
      'lib/client/scripts/icons_gemini.js',
      'lib/client/scripts/templates_gemini.js',

      // images
      'img/header-bg.jpg'

    ],
    'client'
  );

  api.export([
    'postModules',
    'postHeading',
    'postMeta',
    'getIcon',
    'icons'
  ]);

});

Package.describe({
  summary: "Telescope scopemount-newton theme",
  version: '0.1.0',
  name: "telescope-theme-sm-newton"
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

      // modules
      'lib/client/scss/modules/_nav.scss',
      'lib/client/scss/modules/_posts.scss',

      // partials
      'lib/client/scss/partials/_typography.scss',
      'lib/client/scss/partials/_grid.scss',

      // screen
      'lib/client/scss/screen.scss',

      // overrides
      'lib/client/templates/post_content_newton.html',

      // customizations
      'lib/client/scripts/base_newton.js',
      'lib/client/scripts/templates_newton.js'

    ],
    'client'
  );

  api.export([
    'postHeading'
  ]);

});

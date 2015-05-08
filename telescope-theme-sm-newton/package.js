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
      'lib/client/templates/post_content_newton.html',
      'lib/client/templates/post_domain_newton.html',
      'lib/client/templates/post_info_newton.html',
      'lib/client/templates/post_upvote_newton.html',

      // customizations
      'lib/client/scripts/base_newton.js',
      'lib/client/scripts/icons_newton.js',
      'lib/client/scripts/templates_newton.js'

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

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

      // partials

      // screen

      // overrides

      // customizations

    ],
    'client'
  );

  api.export([
  ]);

});

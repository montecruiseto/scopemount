Package.describe({
  name: "montecruiseto:telescope-theme-sm-starfire",
  summary: "Telescope Scopemount: Starfire theme package",
  version: "0.1.0",
  git: "https://github.com/montecruiseto/scopemount.git"
});

Package.onUse(function (api) {

  api.use([
      // core dependencies
      'telescope:core@0.20.5',
      'telescope:theme-base@0.20.5',
      'telescope:theme-hubble@0.20.5',
      'jeremy:telescope-plugin-hero@0.2.5'
    ]);

  api.addFiles([
      'lib/modules_starfire.js'
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
      'lib/client/templates/starfire.html',
      'lib/client/templates/post_content_starfire.html',
      'lib/client/templates/post_info_starfire.html',
      'lib/client/templates/post_upvote_starfire.html',

      // customizations
      'lib/client/scripts/icons_starfire.js',
      'lib/client/scripts/templates_starfire.js'

    ], ['client']);

});

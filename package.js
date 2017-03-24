/* eslint-env es6:false */
/* eslint-disable prefer-arrow-callback */

Package.describe({
  summary: 'Wrapper package for slug NPM package ' +
    'without unicode database for client',
  version: '0.0.4',
  name: 'fuww:slug',
  git: 'https://github.com/fuww/meteor-slug.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'modules@0.5.1'
  ], 'server');

  api.addFiles([
    'node_modules/slug/slug.js',
    'client/slug.js'
  ], 'client');

  api.addFiles([
    'server/slug.js'
  ], 'server');

  api.addFiles([
    'shared/rfc3986.js'
  ]);

  api.export([
    'slug'
  ]);
});

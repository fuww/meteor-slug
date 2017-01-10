/* eslint-env es6:false */
/* eslint-disable prefer-arrow-callback */

Package.describe({
  summary: 'Wrapper package for slug NPM package ' +
    'without unicode database for client',
  version: '0.0.1',
  name: 'fuww:slug',
  git: 'https://github.com/fuww/meteor-slug.git',
  documentation: 'README.md'
});

Npm.depends({
  slug: '0.9.1'
});

Package.onUse(function(api) {
  api.addFiles([
    '.npm/package/node_modules/slug/slug.js',
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

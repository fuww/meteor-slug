/* eslint-env es6:false */
/* eslint-disable prefer-arrow-callback */

Package.describe({
  summary: 'Wrapper package for slug NPM package ' +
    'without unicode database for client',
  version: '0.0.9',
  name: 'fuww:slug',
  git: 'https://github.com/fuww/meteor-slug.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'modules@0.15.0',
    'ecmascript@0.14.4'
  ]);

  api.mainModule('slug.js');

  api.export([
    'slug'
  ]);
});

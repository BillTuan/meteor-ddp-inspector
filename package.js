Package.describe({
  name: 'baotuan:ddp-inspector',
  version: '1.2.0',
  // Brief, one-line summary of the package.
  summary: 'See all DDP activity in the client-side and full-text search them.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/BillTuan/meteor-ddp-inspector.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true
})

Package.onUse(function (api) {
  api.versionsFrom('1.0')

  api.use([
    'mongo',
    'tracker',
    'templating',
    'session',
    'cultofcoders:persistent-session@0.4.5',
    'underscore',
    'mousetrap:mousetrap@1.4.6_1',
    'jquery',
    'reactive-dict'
  ])

  api.use('constellation:console@1.2.1', {
    weak: true
  })

  api.addFiles([
    'templates.html',
    'styles.css',
    'console-log-polyfill.js',
    'constants.js',
    'globals.js',
    'method-cache.js',
    'constellation.js',
    'templates.js',
    'ddp-inspector.js'
  ], ['client'])
})

/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-bootstrap-sassy': {
    js: false,
    quiet: true
  },
  'autoprefixer': {
    cascade: false
  }
});

app.import('vendor/rsvp/rsvp-3.0.18.js');
app.import('vendor/rsvp/shim.js');
app.import('bower_components/UUID.js/dist/uuid.core.js');
app.import('vendor/uuid/shim.js');
app.import('bower_components/oasis.js/dist/oasis.amd.js');
app.import('bower_components/conductor.js/dist/conductor-0.3.0.amd.js');
app.import('vendor/oasis/shim.js');
app.import('vendor/conductor/shim.js');
// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();

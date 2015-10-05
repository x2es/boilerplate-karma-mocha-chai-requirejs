
/**
 * This is entry-point for testing with karma-runner and requirejs
 * based on sinpped from: http://karma-runner.github.io/0.8/plus/RequireJS.html
 */
(function() {

  var specFiles = null;
  var baseUrl = '';
  var requirejsCallback = null;

  // if invoked in karma-runner environment
  if (typeof window != 'undefined' && window.__karma__ != undefined) {
    // Karma serves files from '/base'
    baseUrl = '/base';
    requirejsCallback = window.__karma__.start;

    // looking for *_spec.js files
    specFiles = [];
    for (var file in window.__karma__.files) {
      if (window.__karma__.files.hasOwnProperty(file)) {
        if (/.*\/js\/spec\/.+_spec\.js$/.test(file)) {
          specFiles.push(file);
        }
      }
    }
  }

  requirejs.config({
      baseUrl: baseUrl,

      paths: {
        'chai':  'node_modules/chai/chai',
        'sinon': 'node_modules/sinon/pkg/sinon'
      },

      // ask Require.js to load these files (all our tests)
      deps: specFiles,

      // start test run, once Require.js is done
      callback: requirejsCallback
  });
})();


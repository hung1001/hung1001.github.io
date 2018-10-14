(function() {
  'use strict';

  importScripts('htmlminifier.min.js');
  var minify = require('html-minifier').minify;
  addEventListener('message', function(event) {
    try {
      var options = event.data.options;
      options.log = function(message) {
        console.log(message);
      };
      postMessage(minify(event.data.value, options));
    }
    catch (err) {
      postMessage({
        error: err + ''
      });
    }
  });
  postMessage(null);
})();

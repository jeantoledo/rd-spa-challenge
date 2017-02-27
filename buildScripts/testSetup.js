// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand. ex: css import
require.extensions['.css'] = function() {};

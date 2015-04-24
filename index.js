var postcss = require('postcss');

module.exports = postcss.plugin('postcss-demo', function(opts) {
    opts = opts || {};

    // TODO: Work with options here

    return function(css) {

        // TODO: Transform CSS AST here

    };
});

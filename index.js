var postcss = require('postcss');

module.exports = postcss.plugin('postcss-demo', function(opts) {
    opts = opts || {};

    // TODO: Work with options here

    return function(css) {

        // @see https://github.com/postcss/postcss/blob/master/API.md
        css.eachInside(function(node) {
            if (node.type === 'decl' && node.prop === 'color') {
                node.value = (opts.coolestColor || 'green');
            }
        })

    };
});

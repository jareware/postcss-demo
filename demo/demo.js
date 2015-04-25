console.log(Array(42).join('\n')); // separate each run

var postcss = require('postcss');
var demoPlugin = require('../index.js');
var input = require('fs').readFileSync(__dirname + '/demo.scss'); // note that this is .scss only so IDE's wont mind fancier syntax
var output = postcss([ demoPlugin({ coolestColor: 'green' }) ]).process(input).css;

console.log('\n--- TRANSFORMED CSS ---\n\n' + output + '\n');
console.log(Array(42).join('\n')); // separate each run

var postcss = require('postcss');
var demoPlugin = require('../index.js');
var input = require('fs').readFileSync(__dirname + '/demo.scss');
var output = postcss([ /* TODO */ ]).process(input).css;

console.log('\n--- TRANSFORMED CSS ---\n\n' + output + '\n');
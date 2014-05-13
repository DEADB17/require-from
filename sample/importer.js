/* jshint node:true */

var requireFrom = require('../../requireFrom');

console.log('requireFrom("exports", "./exporter") ->',
            requireFrom('exports', './exporter'));

console.log('requireFrom("testExports", "./exporter") - >',
            requireFrom('testExports', './exporter'));

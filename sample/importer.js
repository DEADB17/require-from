/* jshint node:true */

var requireFrom = require('../../requireFrom');

console.log('requireFrom("testExports", "./exporter") ->',
            requireFrom('testExports', module, './exporter'));

console.log('requireFrom("exports", "./exporter") ->',
            requireFrom('exports', module, './exporter'));

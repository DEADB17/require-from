/*jshint node:true */

'use strict';

var requireFrom = require('../../../');

module.testExports = {
    top: requireFrom('topExports', '../'),
    inner: 'inner testExports value',
    bottom: requireFrom('bottomExports', './bottom')
};

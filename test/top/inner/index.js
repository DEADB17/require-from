/*jshint node:true */

'use strict';

var requireFrom = require('../../../');

module.testExports = {
    top: requireFrom('topExports', module, '../'),
    inner: 'inner testExports value',
    bottom: requireFrom('bottomExports', module, './bottom').bottom
};

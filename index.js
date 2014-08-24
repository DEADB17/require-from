/* jshint node:true */

'use strict';

var assert = require('assert');
var pathLib = require('path');


module.exports = function (key, mod, path) {
    var argLen = arguments.length;
    if (argLen === 2) {
        path = mod;
        mod  = undefined;
    }
    var isRel = path.charAt(0) === '.';

    assert(typeof key === 'string', 'export key must be a string');
    assert(key, 'missing export key');
    assert(typeof path === 'string', 'path must be a string');
    assert(key, 'missing path');

    var moduleExports;
    if (isRel) {
        assert(mod, 'missing module');
        var parent = pathLib.dirname(mod.filename);
        var normalized = pathLib.resolve(parent, path);
        moduleExports = require(normalized);
    } else {
        moduleExports = require(path);
    }

    var res;
    if (module.parent.children.some(function (it) {
        res = it;
        return it.exports === moduleExports;
    })) {
        return res[key];
    } else {
        return undefined;
    }
};

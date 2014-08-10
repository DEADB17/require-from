/* jshint node:true */

var assert = require('assert');
var pathLib = require('path');


module.exports = function (key, path) {
    assert(typeof key === 'string', 'key must be a string');
    assert(key, 'missing key');
    assert(typeof path === 'string', 'path must be a string');
    assert(key, 'missing path');

    var isRel = path.charAt(0) === '.';
    var moduleExports;

    if (isRel) {
        var parent = pathLib.dirname(module.parent.filename);
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

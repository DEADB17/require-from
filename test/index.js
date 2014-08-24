/*jshint node:true */
/*global suite, test*/

'use strict';

var assert = require('chai').assert;
var requireFrom = require('../');


suite('index');

test('requireFrom is defined', function () {
    assert.isFunction(requireFrom);
});

test('sample behaves as described in README.md', function () {
    assert.strictEqual(requireFrom('testExports', module, '../sample/exporter'), 'testExports');
    assert.strictEqual(requireFrom('exports', module, '../sample/exporter'), 'regular exports');
});

test('nested requires', function () {
    var inner = requireFrom('testExports', module, './top/inner');
    assert.strictEqual(inner.top, 'topExports value');
    assert.strictEqual(inner.inner, 'inner testExports value');
    assert.strictEqual(inner.bottom, 'bottomExports value');
});

# require-from

Require non-public definitions from node modules.


## Motivation

It is convenient to be able to expose internal module definitions that are not
part of the public API *without* having to create a separate module. A common
use case is testing.


## Instalation

Usually this module is only needed for development.

`npm install require-from --save-dev`


## Usage

1. Expose the desired definitions through `module` using a key other than
   `exports`. e.g.: `module.testExports`.
2. From another module require the definition through
   `requireFrom('module-exports-key', 'path-to-module')`. Where
   'module-exports-key' is a string matching the name of the object with the
   definitions (`testExports` above) and 'path-to-module' is a path following
   the [Node.js require API](http://nodejs.org/api/modules.html#modules_module_require_id).


### Sample

*exporter.js*:
```js
module.testExports = 'testExports';
module.exports = 'regular exports';
```

*importer.js*:
```js
var requireFrom = require('require-from');

console.log('requireFrom("testExports", "./exporter") ->',
            requireFrom('testExports', './exporter'));

console.log('requireFrom("exports", "./exporter") ->',
            requireFrom('exports', './exporter'));
```

*output*:
```
requireFrom("testExports", "./exporter") -> testExports
requireFrom("exports", "./exporter") -> regular exports
```


### Tip

Define a naming convention and use `bind`:

```javascript
var requireFromTest = require('require-from').bind(undefined, 'testExports');
var m1 = requireFromTest('./m1');
var m2 = requireFromTest('./m2');
```

--------------------------------------------------------------------------------

*require-from*  Copyright  2014 © DEADB17 <DEADB17@gmail.com>  
Distributed under the [GNU GPLv3 license](LICENSE).

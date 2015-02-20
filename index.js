"use strict";

var curry3 = require("fj-curry").curry3;
require("6to5/polyfill");


// TODO extract to module
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

var listen = function (type, listener, targets) {
  return (function () {
    var _ref = [];

    for (var _iterator = flatten([targets]), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }
      var target = _ref2;
      _ref.push(target.addEventListener(type, listener));
    }

    return _ref;
  })();
};

module.exports = curry3(listen);
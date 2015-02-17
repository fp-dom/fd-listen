"use strict";

var curry3 = require("fj-curry").curry3;


var listen = function (type, listener, target) {
  target.addEventListener(type, listener);
};

module.exports = curry3(listen);
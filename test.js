"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var listen = _interopRequire(require("./"));




describe("fd-listen", function () {
  var a, e;

  beforeEach(function () {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    a = document.createElement("a");
    a.setAttribute("href", "#");
    a.innerHTML = "nope";
    document.body.appendChild(a);
  });

  it("#listen", function () {
    assert.equal(typeof listen, "function");
    assert.equal(typeof listen("click"), "function");
    assert.equal(typeof listen("click")(function () {}), "function");

    listen("click")(function (event) {
      event.target.innerHTML = "clicked";
    })(a);
    a.dispatchEvent(e);
    assert.equal(a.innerHTML, "clicked");
  });
});
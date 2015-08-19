'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fjFlatten = require('fj-flatten');

var _fjFlatten2 = _interopRequireDefault(_fjFlatten);

var _fjCurry = require('fj-curry');

require('core-js/shim');

var listen = function listen(type, listener, targets) {
  return (function () {
    var _ref = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _fjFlatten2['default'])([targets])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var target = _step.value;

        _ref.push(target.addEventListener(type, listener));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return _ref;
  })();
};

exports['default'] = (0, _fjCurry.curry3)(listen);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt5QkFBb0IsWUFBWTs7Ozt1QkFDVCxVQUFVOztBQUNqQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBR3hCLElBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFJLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTzs7Ozs7Ozs7MkJBQ25CLDRCQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFBNUIsTUFBTTs7a0JBQXdCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUMsQ0FBQzs7cUJBRWhFLHFCQUFPLE1BQU0sQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmbGF0dGVuIGZyb20gJ2ZqLWZsYXR0ZW4nO1xuaW1wb3J0IHsgY3VycnkzIH0gZnJvbSAnZmotY3VycnknO1xucmVxdWlyZSgnY29yZS1qcy9zaGltJyk7XG5cblxubGV0IGxpc3RlbiA9ICh0eXBlLCBsaXN0ZW5lciwgdGFyZ2V0cykgPT5cbiAgW2ZvciAodGFyZ2V0IG9mIGZsYXR0ZW4oW3RhcmdldHNdKSkgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpXTtcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkzKGxpc3Rlbik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
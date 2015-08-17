'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fjFlatten = require('fj-flatten');

var _fjFlatten2 = _interopRequireDefault(_fjFlatten);

var _fjCurry = require('fj-curry');

require('babel/polyfill');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt5QkFBb0IsWUFBWTs7Ozt1QkFDVCxVQUFVOztBQUNqQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7QUFHMUIsSUFBSSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUksSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPOzs7Ozs7OzsyQkFDbkIsNEJBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUE1QixNQUFNOztrQkFBd0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQyxDQUFDOztxQkFFaEUscUJBQU8sTUFBTSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZsYXR0ZW4gZnJvbSAnZmotZmxhdHRlbic7XG5pbXBvcnQgeyBjdXJyeTMgfSBmcm9tICdmai1jdXJyeSc7XG5yZXF1aXJlKCdiYWJlbC9wb2x5ZmlsbCcpO1xuXG5cbmxldCBsaXN0ZW4gPSAodHlwZSwgbGlzdGVuZXIsIHRhcmdldHMpID0+XG4gIFtmb3IgKHRhcmdldCBvZiBmbGF0dGVuKFt0YXJnZXRzXSkpIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKV07XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MyhsaXN0ZW4pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
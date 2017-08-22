'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

var _react = require('react');

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// It just uses a specific component given a prop value.
// Less declaritive perhaps but really easy to reason about.
// You can use this concept anywhere!
function Router(_ref) {
  var RouteIndex = _ref.RouteIndex,
      defaultRouteId = _ref.defaultRouteId,
      props = _objectWithoutProperties(_ref, ['RouteIndex', 'defaultRouteId']);

  // Find the default component to use if there is not route match.
  var ComponentDefault = (0, _get3.default)(RouteIndex, defaultRouteId, (0, _find3.default)(RouteIndex));
  // Get route id from props. Use defaultRouteId if route.id not found.
  var routeId = (0, _get3.default)(props, ['route', 'id'], defaultRouteId);
  // Select component from the RouteIndex. Use default Component if there is no match.
  var Component = (0, _get3.default)(RouteIndex, routeId, ComponentDefault);
  // Pass found component any props this component got.
  return (0, _react.createElement)(Component, props);
}

Router.propTypes = {
  defaultRouteId: _propTypes.PropTypes.string.isRequired,
  route: _propTypes.PropTypes.shape({
    id: _propTypes.PropTypes.string.isRequired
  }),
  RouteIndex: _propTypes.PropTypes.objectOf(_propTypes.PropTypes.func).isRequired
};
Router.defaultProps = {
  defaultRouteId: 'home'
};
exports.default = Router;
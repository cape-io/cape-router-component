'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderRoot;

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _capeRoutes = require('cape-routes');

var _capeRoutes2 = _interopRequireDefault(_capeRoutes);

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Using a class for live/hot reload

// @param rootDestEl: Define our destination where we insert our root react component.
// window.document.getElementById('root')
// @param store: Redux store
// @param RouteIndex: Object of components keyed by routId.
function renderRoot(_ref) {
  var rootDestEl = _ref.rootDestEl,
      RouteIndex = _ref.RouteIndex,
      store = _ref.store;

  _reactDom2.default.render((0, _react.createElement)(_reactRedux.Provider, { store: store }, (0, _react.createElement)((0, _reactRedux.connect)(_capeRoutes2.default)(_Router2.default), { RouteIndex: RouteIndex })), rootDestEl);
}
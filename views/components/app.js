"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../redux/actions");

var _card = _interopRequireDefault(require("./card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//--------------------------
// Main component
//--------------------------
var App = /*#__PURE__*/(0, _react.memo)(function (props) {
  (0, _react.useEffect)(function () {
    var dispatch = props.dispatch;
    dispatch((0, _actions.fetchAppsIfNeeded)());
  }, []);
  var isFetching = props.isFetching,
      apps = props.apps;
  var totalapps = apps.length;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isFetching && totalapps === 0 && /*#__PURE__*/_react["default"].createElement("h2", null, "Loading..."), !isFetching && totalapps === 0 && /*#__PURE__*/_react["default"].createElement("h2", null, "Empty."), /*#__PURE__*/_react["default"].createElement(_card["default"], {
    apps: apps,
    totalapps: totalapps
  }));
});

var mapStateToProps = function mapStateToProps(_ref) {
  var isFetching = _ref.isFetching,
      apps = _ref.apps;
  return {
    isFetching: isFetching,
    apps: apps
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(App);

exports["default"] = _default;
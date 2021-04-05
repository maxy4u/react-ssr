"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _title = _interopRequireDefault(require("./title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CardRight = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var app = _ref.app;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-meta"
  }, /*#__PURE__*/_react["default"].createElement(_title["default"], {
    name: app.name,
    publisher: app.publisher
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "app-lic"
  }, app.price)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-intro",
    dangerouslySetInnerHTML: {
      __html: app.desc
    }
  }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-link"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "btn",
    href: app.link,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Get App")));
});
var _default = CardRight;
exports["default"] = _default;
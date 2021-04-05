"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CardLeft = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var appno = _ref.appno,
      totalapps = _ref.totalapps,
      img = _ref.img;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-no"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "current"
  }, "0".concat(appno)), /*#__PURE__*/_react["default"].createElement("span", {
    className: "connector"
  }, "of "), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "total"
  }, "0".concat(totalapps))), /*#__PURE__*/_react["default"].createElement("img", {
    className: "app-icon",
    src: img.src,
    alt: img.alt,
    height: "120",
    width: "120"
  }));
});
var _default = CardLeft;
exports["default"] = _default;
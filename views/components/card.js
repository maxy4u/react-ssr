"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cardLeft = _interopRequireDefault(require("./card-left"));

var _cardRight = _interopRequireDefault(require("./card-right"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Card = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var apps = _ref.apps,
      totalapps = _ref.totalapps;
  var cards = apps.map(function (app, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "app-card",
      key: app.name
    }, /*#__PURE__*/_react["default"].createElement(_cardLeft["default"], {
      img: app.img,
      appno: index + 1,
      totalapps: totalapps
    }), /*#__PURE__*/_react["default"].createElement(_cardRight["default"], {
      app: app
    }));
  });
  return cards;
});
var _default = Card;
exports["default"] = _default;
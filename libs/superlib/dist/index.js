"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupByName;

var _lodash = _interopRequireDefault(require("lodash.groupby"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function groupByName(obj) {
  return (0, _lodash.default)(obj, x => x.name);
}
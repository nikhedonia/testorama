"use strict";

var _express = _interopRequireDefault(require("express"));

var _superlib = _interopRequireDefault(require("@testorama/superlib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const data = (0, _superlib.default)([{
  a: 1
}]);
app.get('*', (req, res) => {
  res.json(data);
});
app.listen(3000);
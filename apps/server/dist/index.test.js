"use strict";

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("test", function () {
  it('should group', function () {
    var actual = (0, _["default"])([{
      name: "a",
      val: 1
    }, {
      name: "a",
      val: 2
    }]);
    expect(actual).toEqual({
      "a": [{
        name: "a",
        val: 1
      }, {
        name: "a",
        val: 2
      }]
    });
  });
});
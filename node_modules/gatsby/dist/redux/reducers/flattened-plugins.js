"use strict";

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case "SET_SITE_FLATTENED_PLUGINS":
      return [].concat((0, _toConsumableArray3.default)(action.payload));
    default:
      return state;
  }
};
//# sourceMappingURL=flattened-plugins.js.map
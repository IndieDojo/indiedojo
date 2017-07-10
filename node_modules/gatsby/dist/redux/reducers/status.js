"use strict";

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require("lodash");

module.exports = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { plugins: {} };
  var action = arguments[1];

  switch (action.type) {
    case "DELETE_CACHE":
      return { plugins: {} };
    case "UPDATE_PLUGINS_HASH":
      return (0, _extends4.default)({}, state, {
        PLUGINS_HASH: action.payload
      });
    case "SET_PLUGIN_STATUS":
      if (!action.plugin && !action.plugin.name) {
        throw new Error("You can't set plugin status without a plugin");
      }
      if (!_.isObject(action.payload)) {
        throw new Error("You must pass an object into setPluginStatus. What was passed in was " + (0, _stringify2.default)(action.payload, null, 4));
      }
      return (0, _extends4.default)({}, state, {
        plugins: (0, _extends4.default)({}, state.plugins, (0, _defineProperty3.default)({}, action.plugin.name, _.merge({}, state.plugins[action.plugin.name], action.payload)))
      });
    default:
      return state;
  }
};
//# sourceMappingURL=status.js.map
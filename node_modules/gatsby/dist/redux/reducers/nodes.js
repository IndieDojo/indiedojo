"use strict";

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require("lodash");

module.exports = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var newState = void 0;
  switch (action.type) {
    case "DELETE_CACHE":
      return {};
    case "CREATE_NODE":
    case "ADD_FIELD_TO_NODE":
    case "ADD_CHILD_NODE_TO_PARENT_NODE":
      newState = (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.payload.id, action.payload));
      return newState;

    case "DELETE_NODE":
      newState = _.omit(state, action.payload);
      return newState;

    case "DELETE_NODES":
      newState = _.omit(state, action.payload);
      return newState;

    default:
      return state;
  }
};
//# sourceMappingURL=nodes.js.map
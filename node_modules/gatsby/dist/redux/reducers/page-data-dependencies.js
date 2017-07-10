"use strict";

var _ = require("lodash");

module.exports = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { nodes: {}, connections: {} };
  var action = arguments[1];

  switch (action.type) {
    case "DELETE_CACHE":
      return { nodes: {}, connections: {} };
    case "CREATE_PAGE_DEPENDENCY":
      if (action.payload.path === "") {
        return state;
      }

      // If this nodeId not set yet.
      if (action.payload.nodeId) {
        var existingPaths = [];
        if (state.nodes[action.payload.nodeId]) {
          existingPaths = state.nodes[action.payload.nodeId];
        }
        var newPaths = _.uniq(existingPaths.concat(action.payload.path));
        state.nodes[action.payload.nodeId] = newPaths;
      }

      // If this connection not set yet.
      if (action.payload.connection) {
        var _existingPaths = [];
        if (state.connections[action.payload.connection]) {
          _existingPaths = state.connections[action.payload.connection];
        }
        var _newPaths = _.uniq(_existingPaths.concat(action.payload.path));
        state.connections[action.payload.connection] = _newPaths;
      }

      return state;
    case "DELETE_PAGES_DEPENDENCIES":
      state.nodes = _.mapValues(state.nodes, function (paths) {
        return _.difference(paths, action.payload.paths);
      });
      state.connections = _.mapValues(state.connections, function (paths) {
        return _.difference(paths, action.payload.paths);
      });

      return state;
    default:
      return state;
  }
};
//# sourceMappingURL=page-data-dependencies.js.map
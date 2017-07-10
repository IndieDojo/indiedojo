"use strict";

// Invoke plugins for certain actions.

var _require = require("./index"),
    store = _require.store,
    emitter = _require.emitter;

var apiRunnerNode = require("../utils/api-runner-node");

emitter.on("CREATE_NODE", function (action) {
  var node = store.getState().nodes[action.payload.id];
  apiRunnerNode("onCreateNode", { node: node, traceId: action.traceId });
});

emitter.on("CREATE_PAGE", function (action) {
  var page = action.payload;
  apiRunnerNode("onCreatePage", { page: page, traceId: action.traceId }, action.plugin.name);
});
//# sourceMappingURL=plugin-runner.js.map
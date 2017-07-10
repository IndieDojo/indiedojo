"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinPath = joinPath;
var path = require("path");
var os = require("os");

function joinPath() {
  var joinedPath = path.join.apply(path, arguments);
  if (os.platform() === "win32") {
    return joinedPath.replace(/\\/g, "\\\\");
  } else {
    return joinedPath;
  }
}
//# sourceMappingURL=path.js.map
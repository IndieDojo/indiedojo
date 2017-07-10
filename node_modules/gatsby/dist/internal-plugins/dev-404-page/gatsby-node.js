"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require("path");
var fs = require("fs-extra");

exports.createPages = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
    var store = _ref2.store,
        boundActionCreators = _ref2.boundActionCreators;

    var _store$getState, program, createPage, currentPath, newPath;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (process.env.NODE_ENV !== "production") {
              _store$getState = store.getState(), program = _store$getState.program;
              createPage = boundActionCreators.createPage;
              currentPath = path.join(__dirname, "./raw_dev-404-page.js");
              newPath = path.join(program.directory, ".cache", "dev-404-page.js");


              fs.copySync(currentPath, newPath);

              createPage({
                component: newPath,
                path: "/dev-404-page/"
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=gatsby-node.js.map
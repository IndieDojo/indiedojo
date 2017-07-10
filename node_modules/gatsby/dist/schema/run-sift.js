"use strict";

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sift = require("sift");
var _ = require("lodash");

var _require = require("graphql-skip-limit"),
    connectionFromArray = _require.connectionFromArray;

var _require2 = require("../redux/"),
    store = _require2.store;

var _require3 = require("../redux/actions/add-page-dependency"),
    createPageDependency = _require3.createPageDependency;

var prepareRegex = require("./prepare-regex");

module.exports = function (_ref) {
  var args = _ref.args,
      nodes = _ref.nodes,
      _ref$connection = _ref.connection,
      connection = _ref$connection === undefined ? false : _ref$connection,
      _ref$path = _ref.path,
      path = _ref$path === undefined ? "" : _ref$path;

  // Clone args as for some reason graphql-js removes the constructor
  // from nested objects which breaks a check in sift.js.
  var clonedArgs = JSON.parse((0, _stringify2.default)(args));

  var siftifyArgs = function siftifyArgs(object) {
    var newObject = {};
    _.each(object, function (v, k) {
      if (_.isObject(v) && !_.isArray(v)) {
        newObject[k] = siftifyArgs(v);
      } else {
        // Compile regex first.
        if (k === "regex") {
          newObject["$regex"] = prepareRegex(v);
        } else if (k === "glob") {
          var Minimatch = require("minimatch").Minimatch;
          var mm = new Minimatch(v);
          newObject["$regex"] = mm.makeRe();
        } else {
          newObject["$" + k] = v;
        }
      }
    });
    return newObject;
  };

  var siftArgs = [];
  if (clonedArgs.filter) {
    _.each(clonedArgs.filter, function (v, k) {
      // Ignore connection and sorting args
      if (_.includes(["skip", "limit", "sort"], k)) return;

      siftArgs.push(siftifyArgs((0, _defineProperty3.default)({}, k, v)));
    });
  }

  var result = _.isEmpty(siftArgs) ? nodes : sift({ $and: siftArgs }, nodes);

  if (!result || !result.length) return;

  // Sort results.
  if (clonedArgs.sort) {
    var convertedFields = clonedArgs.sort.fields.map(function (field) {
      return field.replace(/___/g, ".");
    });

    result = _.orderBy(result, convertedFields, clonedArgs.sort.order);
  }

  if (connection) {
    var connectionArray = connectionFromArray(result, args);
    connectionArray.totalCount = result.length;
    if (result.length > 0 && result[0].internal) {
      createPageDependency({
        path: path,
        connection: result[0].internal.type
      });
    }
    return connectionArray;
  }

  createPageDependency({
    path: path,
    nodeId: result[0].id
  });

  return result[0];
};
//# sourceMappingURL=run-sift.js.map
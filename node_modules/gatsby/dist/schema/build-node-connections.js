"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require("lodash");

var _require = require("graphql-skip-limit"),
    connectionArgs = _require.connectionArgs,
    connectionDefinitions = _require.connectionDefinitions;

var _require2 = require("graphql"),
    GraphQLInputObjectType = _require2.GraphQLInputObjectType;

var _require3 = require("./infer-graphql-input-fields"),
    inferInputObjectStructureFromNodes = _require3.inferInputObjectStructureFromNodes;

var buildConnectionFields = require("./build-connection-fields");

var _require4 = require("../redux"),
    getNodes = _require4.getNodes;

module.exports = function (types) {
  var connections = {};

  _.each(types, function (type /* , fieldName*/) {
    var nodes = type.nodes;

    var _connectionDefinition = connectionDefinitions({
      nodeType: type.nodeObjectType,
      connectionFields: function connectionFields() {
        return buildConnectionFields(type);
      }
    }),
        typeConnection = _connectionDefinition.connectionType;

    var _inferInputObjectStru = inferInputObjectStructureFromNodes({
      nodes: nodes,
      typeName: type.name + "Connection"
    }),
        sort = _inferInputObjectStru.sort,
        inferredFields = _inferInputObjectStru.inferredFields;

    connections[_.camelCase("all " + type.name)] = {
      type: typeConnection,
      description: "Connection to all " + type.name + " nodes",
      args: (0, _extends3.default)({}, connectionArgs, {
        sort: sort,
        filter: {
          type: new GraphQLInputObjectType({
            name: _.camelCase("filter " + type.name),
            description: "Filter connection on its fields",
            fields: function fields() {
              return inferredFields;
            }
          })
        }
      }),
      resolve: function resolve(object, resolveArgs, b, _ref) {
        var rootValue = _ref.rootValue;

        var path = void 0;
        if (typeof rootValue !== "undefined") {
          path = rootValue.path;
        }
        var runSift = require("./run-sift");
        var latestNodes = _.filter(getNodes(), function (n) {
          return n.internal.type === type.name;
        });
        return runSift({
          args: resolveArgs,
          nodes: latestNodes,
          connection: true,
          path: path
        });
      }
    };
  });

  return connections;
};
//# sourceMappingURL=build-node-connections.js.map
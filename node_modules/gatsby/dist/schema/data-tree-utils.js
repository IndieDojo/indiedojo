"use strict";

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require("lodash");
var flatten = require("flat");
var typeOf = require("type-of");

var createKey = require("./create-key");

var INVALID_VALUE = (0, _symbol2.default)("INVALID_VALUE");
var isDefined = function isDefined(v) {
  return v != null;
};

var isSameType = function isSameType(a, b) {
  return a == null || b == null || typeOf(a) === typeOf(b);
};
var areAllSameType = function areAllSameType(list) {
  return list.every(function (current, i) {
    var prev = i ? list[i - 1] : undefined;
    return isSameType(prev, current);
  });
};

var isEmptyObjectOrArray = function isEmptyObjectOrArray(obj) {
  if (obj === INVALID_VALUE) {
    return true;
    // Simple "is object empty" check.
  } else if (_.isObject(obj) && _.isEmpty(obj)) {
    return true;
  } else if (_.isObject(obj)) {
    return _.every(obj, function (value, key) {
      if (!isDefined(value)) {
        return true;
      } else if (_.isObject(value)) {
        return isEmptyObjectOrArray(value);
      } else {
        return false;
      }
    });
  }
  return false;
};

/**
 * Takes an array of source nodes and returns a pristine
 * example that can be used to infer types.
 *
 * Arrays are flattened to either: `null` for empty or sparse arrays or a
 * an array of a sigle merged example. e.g:
 *
 *  - ['red'], ['blue', 'yellow'] -> ['red']
 *  - [{ color: 'red'}, { color: 'blue', ht: 5 }] -> [{ color: 'red', ht: 5 }]
 *
 * @param {*Nodes} args
 */
var extractFieldExamples = function extractFieldExamples(nodes
// $FlowFixMe
) {
  return _.mergeWith.apply(_, [_.isArray(nodes[0]) ? [] : {}].concat((0, _toConsumableArray3.default)(nodes), [function (obj, next, key, po, pn, stack) {
    if (obj === INVALID_VALUE) return obj;

    // TODO: if you want to support infering Union types this should be handled
    // differently. Maybe merge all like types into examples for each type?
    // e.g. union: [1, { foo: true }, ['brown']] -> Union Int|Object|List
    if (!isSameType(obj, next)) return INVALID_VALUE;

    if (!_.isArray(obj || next)) {
      // Prefer floats over ints as they're more specific.
      if (obj && _.isNumber(obj) && !_.isInteger(obj)) return obj;
      if (obj === null) return next;
      if (next === null) return obj;
      return undefined;
    }

    var array = [].concat(obj, next).filter(isDefined);

    if (!array.length) return null;
    if (!areAllSameType(array)) return INVALID_VALUE;

    // Linked node arrays don't get reduced further as we
    // want to preserve all the linked node types.
    if (_.includes(key, "___NODE")) {
      return array;
    }

    // primitive values don't get merged further, just take the first item
    if (!_.isObject(array[0])) return array.slice(0, 1);
    var merged = extractFieldExamples(array);
    return isDefined(merged) ? [merged] : null;
  }]));
};

var buildFieldEnumValues = function buildFieldEnumValues(nodes) {
  var enumValues = {};
  var values = flatten(extractFieldExamples(nodes), {
    maxDepth: 3,
    safe: true, // don't flatten arrays.
    delimiter: "___"
  });
  (0, _keys2.default)(values).forEach(function (field) {
    if (values[field] == null) return;
    enumValues[createKey(field)] = { field: field };
  });

  return enumValues;
};

module.exports = {
  INVALID_VALUE: INVALID_VALUE,
  extractFieldExamples: extractFieldExamples,
  buildFieldEnumValues: buildFieldEnumValues,
  isEmptyObjectOrArray: isEmptyObjectOrArray
};
//# sourceMappingURL=data-tree-utils.js.map
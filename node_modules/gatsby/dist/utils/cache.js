"use strict";

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Promise = require("bluebird");
var low = require("lowdb");
var fs = require("fs-extra");
var _ = require("lodash");

var db = void 0;
var directory = void 0;
exports.initCache = function () {
  fs.ensureDirSync(process.cwd() + "/.cache/cache");
  if (process.env.NODE_ENV === "test") {
    directory = require("os").tmpdir();
  } else {
    directory = process.cwd() + "/.cache/cache";
  }
  db = low(null, {
    format: {
      serialize: function serialize(obj) {
        return (0, _stringify2.default)(obj);
      },
      deserialize: function deserialize(str) {
        return JSON.parse(str);
      }
    }
  });
  db._.mixin(require("lodash-id"));

  var previousState = void 0;
  try {
    previousState = JSON.parse(fs.readFileSync(directory + "/db.json"));
  } catch (e) {
    // ignore
  }

  if (previousState) {
    db.defaults(previousState).write();
  } else {
    db.defaults({ keys: [] }).write();
  }
};

exports.get = function (key) {
  return new Promise(function (resolve, reject) {
    var pair = void 0;
    try {
      pair = db.get("keys").getById(key).value();
    } catch (e) {
      // ignore
    }

    if (pair) {
      resolve(pair.value);
    } else {
      resolve();
    }
  });
};

exports.set = function (key, value) {
  return new Promise(function (resolve, reject) {
    db.get("keys").upsert({ id: key, value: value }).write();
    save();
    resolve("Ok");
  });
};

var save = void 0;

if (process.env.NODE_ENV !== "test") {
  save = _.debounce(function () {
    fs.writeFile(directory + "/db.json", (0, _stringify2.default)(db.getState()));
  }, 250);
} else {
  save = _.noop;
}
//# sourceMappingURL=cache.js.map
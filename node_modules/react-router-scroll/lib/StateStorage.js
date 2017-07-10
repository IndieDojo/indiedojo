'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STATE_KEY_PREFIX = '@@scroll|';

var SessionStorage = function () {
  function SessionStorage() {
    _classCallCheck(this, SessionStorage);
  }

  SessionStorage.prototype.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);
    var value = sessionStorage.getItem(stateKey);
    return JSON.parse(value);
  };

  SessionStorage.prototype.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);
    sessionStorage.setItem(stateKey, storedValue);
  };

  SessionStorage.prototype.getStateKey = function getStateKey(location, key) {
    var locationKey = location.key;
    var stateKeyBase = '' + STATE_KEY_PREFIX + locationKey;
    return key == null ? stateKeyBase : stateKeyBase + '|' + key;
  };

  return SessionStorage;
}();

exports.default = SessionStorage;
module.exports = exports['default'];
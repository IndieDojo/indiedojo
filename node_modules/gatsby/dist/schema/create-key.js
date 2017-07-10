"use strict";

var regex = new RegExp("[^a-zA-Z0-9_]", "g");

/**
 * GraphQL field names cannot contain anything other than alphanumeric
 * characters and `_`. They also can't start with `__` which is reserved for
 * internal fields (`___foo` doesn't work either).
 */
module.exports = function (key) {
  return key.replace(regex, "_");
};
//# sourceMappingURL=create-key.js.map
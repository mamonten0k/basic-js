const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  return (str.match(/(.)\1*/g) || [])
    .reduce((result, currEl) => (result += currEl.length + currEl[0]), "")
    .replace(new RegExp("1", "g"), "");
}

module.exports = {
  encodeLine,
};

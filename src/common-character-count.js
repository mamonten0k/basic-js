const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let uniuqesS1 = Array.from(new Set(s1));
  return Array.from(uniuqesS1).reduce(
    (count, currValue) =>
      (count += Math.min(
        (s1.match(new RegExp(`${currValue}`, "gi")) || []).length,
        (s2.match(new RegExp(`${currValue}`, "gi")) || []).length
      )),
    0
  );
}

module.exports = {
  getCommonCharacterCount,
};

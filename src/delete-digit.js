const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let str = (n + "").split("");
  let max = Number.MIN_VALUE;
  for (let i = 0; i < str.length; i++) {
    if (+str.join("").slice(1) > max && i == 0) {
      max = +str.join("").slice(1);
    } else if (+str.join("").slice(0, -1) > max && i == str.length - 1) {
      max = +str.join("").slice(0, -1);
    } else if (+(str.join("").slice(0, i) + str.join("").slice(i + 1)) > max) {
      max = +str.join("").slice(0, i) + str.join("").slice(i + 1);
    }
  }
  return +max;
}

module.exports = {
  deleteDigit,
};

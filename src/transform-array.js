const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let transformed = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      i++;
    } else if (
      arr[i] === "--discard-prev" &&
      i != 0 &&
      arr[i - 1] == transformed[transformed.length - 1]
    ) {
      transformed[i - 1] = arr[++i];
    } else if (
      arr[i] === "--discard-prev" &&
      (i <= 0 || arr[i - 1] != transformed[transformed.length - 1])
    ) {
      continue;
    } else if (arr[i] === "--double-next" && i + 1 < arr.length) {
      transformed.push(arr[++i]);
      transformed.push(arr[i]);
    } else if (arr[i] === "--double-next" && i + 1 >= arr.length) {
      continue;
    } else if (
      arr[i] === "--double-prev" &&
      i - 1 > 0 &&
      arr[i - 1] == transformed[transformed.length - 1]
    ) {
      transformed.push(arr[i - 1]);
    } else if (
      arr[i] === "--double-prev" &&
      (i - 1 < 0 || arr[i - 1] != transformed[transformed.length - 1])
    ) {
      console.log(arr[i - 1], transformed[transformed.length - 1], "test");
      continue;
    } else {
      transformed.push(arr[i]);
    }
  }
  return transformed;
}
module.exports = {
  transform,
};

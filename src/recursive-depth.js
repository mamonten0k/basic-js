const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, counter_r = 0) {
    let counter = counter_r + 1;
    for (let el of arr) {
      if (Array.isArray(el)) {
        let res = this.calculateDepth(el, counter_r + 1);
        counter = counter < res ? res : counter;
      }
    }
    return counter;
  }
}
module.exports = {
  DepthCalculator,
};

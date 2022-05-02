const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let separator = options.separator || "+";
  let repeatTimes = options.repeatTimes || 1;
  let addition = options.addition || "";
  let additionSeparator = options.additionSeparator || "|";
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  if (options.addition == false) addition = "false";
  if (options.addition === null || options.addition === "null")
    addition = "null";

  let additional_str = (addition + additionSeparator)
    .repeat(additionRepeatTimes)
    .slice(0, -additionSeparator.length);
  return (str + additional_str + separator)
    .repeat(repeatTimes)
    .slice(0, -separator.length);
}

module.exports = {
  repeater,
};

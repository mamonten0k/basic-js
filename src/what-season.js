const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (
    !(date instanceof Date)
    // date.hasOwnProperty("getMonth")
  )
    throw new Error("Invalid date!");
  try {
    date.toJSON();
  } catch (error) {
    throw new Error("Invalid date!");
  }
  let month = date.getMonth();
  if ([11, 0, 1].includes(month)) return "winter";
  if ([2, 3, 4].includes(month)) return "spring";
  if ([5, 6, 7].includes(month)) return "summer";
  return "autumn";
}
module.exports = {
  getSeason,
};

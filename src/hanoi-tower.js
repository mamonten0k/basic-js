const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns;
  if (disksNumber == 1)
    return { turns: 1, seconds: Math.floor(3600 / turnsSpeed) };
  turns = 1;
  for (let i = 0; i < disksNumber - 1; i++) {
    turns = turns * 2 + 1;
  }
  return { turns: turns, seconds: Math.floor((turns / turnsSpeed) * 3600) };
}

module.exports = {
  calculateHanoi,
};

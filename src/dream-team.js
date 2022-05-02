const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members
    .reduce((codeName, currEl) => {
      if (typeof currEl === "string")
        codeName.push(currEl.trim().toUpperCase().slice(0, 1));
      return codeName;
    }, [])
    .sort((a, b) => a.codePointAt(0) - b.codePointAt(0))
    .join("");
}

module.exports = {
  createDreamTeam,
};

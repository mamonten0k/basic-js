const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value = "( )") {
    // if (arguments.length === 0) this.chains.push("( )");
    this.chains.push(value);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chains.length
    ) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },
  finishChain() {
    let result = this.chains
      .reduce((chain, currEl) => (chain += `( ${currEl} )~~`), "")
      .slice(0, -2);
    this.chains = [];
    return result;
  },
};
module.exports = {
  chainMaker,
};

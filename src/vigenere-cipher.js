const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  defaultDecrease = "A".codePointAt(0);

  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    let temp,
      counter = 1;

    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    key = key.toUpperCase().split("");
    message = message.toUpperCase().split("");

    for (let i = 0; i < message.length; i++) {
      temp = key[(counter - 1) % key.length];
      console.log(temp, message[i]);
      if (message[i].codePointAt(0) < 65 || message[i].codePointAt(0) > 90) {
        if (i == message.length) break;
        continue;
      }
      if (
        "Z".codePointAt(0) - message[i].codePointAt(0) >=
        temp.codePointAt(0) - this.defaultDecrease
      ) {
        message[i] = String.fromCodePoint(
          message[i].codePointAt(0) + temp.codePointAt(0) - this.defaultDecrease
        );
      } else {
        message[i] = String.fromCodePoint(
          temp.codePointAt(0) -
            "Z".codePointAt(0) +
            message[i].codePointAt(0) -
            1
        );
      }
      counter += 1;
    }
    return this.type ? message.join("") : message.reverse().join("");
  }

  decrypt(message, key) {
    let temp,
      counter = 1;

    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    key = key.toUpperCase().split("");
    message = message.toUpperCase().split("");

    for (let i = 0; i < message.length; i++) {
      temp = key[(counter - 1) % key.length];
      if (message[i].codePointAt(0) < 65 || message[i].codePointAt(0) > 90) {
        if (i == message.length) break;
        continue;
      }
      if (temp.codePointAt(0) <= message[i].codePointAt(0)) {
        message[i] = String.fromCodePoint(
          message[i].codePointAt(0) - temp.codePointAt(0) + this.defaultDecrease
        );
      } else {
        message[i] = String.fromCodePoint(
          "Z".codePointAt(0) -
            temp.codePointAt(0) +
            message[i].codePointAt(0) +
            1
        );
      }
      counter += 1;
    }

    return this.type ? message.join("") : message.reverse().join("");
  }
}
module.exports = {
  VigenereCipheringMachine,
};

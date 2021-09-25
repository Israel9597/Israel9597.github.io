"use strict";
/* global Account  */

const acc = require("./account.js"); //with node need the name of your file with your functions here
const Account = acc.Account; //do this for all of the functions used in the Mocha tests
class CheckingAccount extends Account {
  /* exports at end of file since exporting an object, which can only be referenced after definition   */

  /**
   *
   * @param {Number} overDraft is minimum balance
   * @param {Number} number is checking account number
   */
  constructor(number, overDraft) {
    super(number);
    this.setOverdraft(overDraft);
  }
  /**
   *
   * @param {Number} overDraft is minimum balance
   */
  setOverdraft(overDraft) {
    this._overDraft = overDraft;
  }
  /**
   *
   * @returns {Number} return minimum balance
   */
  getOverdraft() {
    return this._overDraft;
  }
  /**
   *
   * @returns {String } returns checking account information
   */
  toString() {
    return (
      "CheckingAccount " +
      this._number +
      ":" +
      " balance: " +
      this._balance +
      " overdraft limit: " +
      this._overDraft
    );
  }
  /**
   *
   * @param {Number} amount withdraw amounts
   */
  withdraw(amount) {
    if (amount <= -1 * this._overDraft) {
      throw new RangeError(
        "Insufficient funds, cannot withdraw beyond overdraft limit"
      );
    }
    this._balance -= amount;
  }
  endOfMonth() {
    if (this._balance <= 0)
      return (
        "Warning, low balance CheckingAccount " +
        this._number +
        ":" +
        "balance: " +
        this._balance +
        " overdraft limit: " +
        this._overDraft
      );
    return super.endOfMonth();
  }
}
/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
exports.CheckingAccount = CheckingAccount;

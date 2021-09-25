"use strict";
/* global Account require  */
const acc = require("./account.js"); //with node need the name of your file with your functions here
const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

/* global exports */
class SavingsAccount extends Account {
  /**
   *
   * @param {Number} interest is interest rate
   * @param {Number} number is saving account number
   */
  constructor(number, interest) {
    super(number);
    this.setInterest(interest); ////setInterest
  }
  /**
   *
   * @param {Number} interest is interest rate
   */
  setInterest(interest) {
    this._interest = interest;
  }
  /**
   *
   * @returns {Number} returns interest rate
   */
  getInterest() {
    return this._interest;
  }
  /**
   * add interest amount to saving balance
   */
  addInterest() {
    let interestAmount = (this._balance * this._interest) / 100;
    this.deposit(interestAmount);
  }
  /**
   *
   * @returns {String} returns saving account information
   */
  toString() {
    return (
      "SavingsAccount " +
      this._number +
      ":" +
      " balance: " +
      this._balance +
      " interest: " +
      this._interest
    );
  }
  endOfMonth() {
    return (
      "Interest added SavingsAccount " +
      this._number +
      ":" +
      " balance: " +
      this._balance +
      " interest: " +
      this._interest
    );
  }
}

exports.SavingsAccount = SavingsAccount;

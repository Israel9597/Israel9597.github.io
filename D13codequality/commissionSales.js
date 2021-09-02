"use strict";
/* eslint-disable*/
/* import from functions.js module */
module.exports = { computeSalesCommission, compoundInterest };
function computeSalesCommission(sal, amt) {
  let commission = 0;
  if (sal === true) {
    if (amt >= 300 && amt <= 500) {
      commission = amt * 0.01;
    } else if (amt > 500) {
      commission = (amt - 500) * 0.02 + 5;
    }
  } else if (sal === false) {
    if (amt >= 300 && amt <= 500) {
      commission = amt * 0.02;
    } else if (amt > 500) {
      commission = (amt - 500) * 0.03 + 10;
    }
  }
  return commission;
}

function compoundInterest(intialAmount, annualRate, time) {
  let annualInterest =
    intialAmount * Math.pow(1 + annualRate / 100 / 12, time * 12);
  return annualInterest;
}

"use strict";
// Defining table

/** input -
 * the boolean whether true or false in the parameter and also the sales amount as an argument
 * process -
 * the first if statement checks whether it is salaried or not and the second if statement will check and process
 * if the sales amount can get commissions or not and excute
 * out put-
 * expect the amount of commission based on the boolean and sales amount entered.
 */

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
console.log(computeSalesCommission(true, 600));

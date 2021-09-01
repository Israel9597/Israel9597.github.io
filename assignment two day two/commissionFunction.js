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
  if (sal === true) {
    if (amt < 300) {
      return console.log("no commissions");
    } else if (amt > 300 && amt < 500) {
      return console.log("commission=" + " " + amt * 0.01);
    } else if (amt > 500) {
      return console.log("commission=" + " " + amt * 0.02);
    }
  } else if (sal === fales) {
    if (amt < 300) {
      return console.log("no commissions");
    } else if (amt > 300 && amt < 500) {
      return console.log("commission=" + " " + amt * 0.02);
    } else if (amt > 500) {
      return console.log("commission=" + " " + amt * 0.03);
    }
  }
}
computeSalesCommission(true, 600);

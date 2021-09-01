"use strict";
/**definig table
 *
 * input-
 * insert the cost of the house in numbers in the parameter
 *
 * process-
 * compare the cost in if statement and identify the right downpayment calculator and calculates the amount for down payment
 *
 * out put-
 * display the down payments.
 */

function calcDownpayment(cost) {
  if (cost > 0 && cost < 50000) {
    return console.log(`down payment is ${cost * 0.05}`);
  } else if (cost > 50000 && cost < 100000) {
    return console.log(`down payment is ${1000 + 0.1 * (cost - 50000)}`);
  } else if (cost > 100000 && cost < 200000) {
    return console.log(`down payment is ${2000 + 0.15 * (cost - 100000)}`);
  } else {
    return console.log(`down payment is ${5000 + 0.1 * (cost - 200000)}`);
  }
}
calcDownpayment(40000);

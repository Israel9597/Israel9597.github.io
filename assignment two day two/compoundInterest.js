"use strict";
/**input
user input the initial amount, the interst rate and the number years compound 
process
multiplying the intial amount,annual rate and time together
out puts the balance of saving including the interest/** */

function compoundInterest(intialAmount, annualRate, time) {
  let annualInterest =
    intialAmount * Math.pow(1 + annualRate / 100 / 12, time * 12);
  return annualInterest;
}
//const balanceOfsavings = intialAmount + (intialAmount * annualRate * time);
console.logcompoundInterest(100, 10, 1);

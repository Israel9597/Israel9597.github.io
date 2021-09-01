"use strict";
/**input
user input the initial amount, the interst rate and the number years compound 
process
multiplying the intial amount,annual rate and time together
out puts the balance of saving including the interest/** */

function compoundInterest(intialAmount, annualRate, time) {
  const annualInterest =
    intialAmount * Math.pow(1 + annualRate / time, time * 12);
  return console.log(annualInterest);
}
//const balanceOfsavings = intialAmount + (intialAmount * annualRate * time);
compoundInterest(100, 10, 1);

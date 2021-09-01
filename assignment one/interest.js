"use strict";
//input
//user input the initial amount, the interst rate and the number years compound
const prompt = require("prompt-sync")();
const intialAmount = prompt("enter initial amount");
const annualRate = prompt("enter interest rate");
const time = prompt("eneter number of years compound");
// process
//multiplying the intial amount,annual rate and time together
const balanceOfsavings = intialAmount + intialAmount * annualRate * time;
// out putshows the
console.log(balanceOfsavings);

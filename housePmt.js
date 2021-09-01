"use strict";
const prompt = require("prompt-sync")();
const cost = prompt("enter cost of house....");
if (cost > 0 && cost < 50000) {
  console.log(`down payment is ${cost * 0.05}`);
} else if (cost > 50000 && cost < 100000) {
  console.log(`down payment is ${1000 + 0.1 * (cost - 50000)}`);
} else if (cost > 100000 && cost < 200000) {
  console.log(`down payment is ${2000 + 0.15 * (cost - 100000)}`);
} else {
  console.log(`down payment is ${5000 + 0.1 * (cost - 200000)}`);
}

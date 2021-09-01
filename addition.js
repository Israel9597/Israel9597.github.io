"use strict";
const prompt = require("prompt-sync")();
let num = prompt("enter integer");

let sum = 0;

while (num) {
  sum = sum + (Number(num) % 10);
  num = Math.floor(num / 10);
}

console.log(sum);

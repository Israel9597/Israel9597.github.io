"use strict";
//const prompt = require("prompt-sync")();
//let num = prompt("enter integer");

function sumDigits(num) {
  let sum = 0;
  while (num) {
    sum = sum + (Number(num) % 10);
    num = Math.floor(num / 10);
  }
  return console.log(sum);
}

sumDigits(1234);

function multDigits(num) {
  let mult = 1;
  while (num) {
    mult = mult * (Number(num) % 10);
    num = Math.floor(num / 10);
  }
  return console.log(mult);
}

multDigits(1234);

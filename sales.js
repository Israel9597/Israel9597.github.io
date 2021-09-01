"use strict";
const prompt = require("prompt-sync")();

const salary = prompt("Salaried?");
const sales = prompt("Enter sales amount");

if (salary === "yes" && sales < 300) {
  console.log("No comissions");
} else if (salary === "yes" && sales > 300 && sales < 500) {
  console.log(`your comission is ${sales * 0.01}`);
} else if (salary === "yes" && sales > 500) {
  console.log(`your comission is ${sales * 0.02}`);
} else if (salary === "no" && sales > 300 && sales < 500) {
  console.log(`your comission is ${sales * 0.02}`);
} else if (salary === "no" && sales > 500) {
  console.log(`your comission is ${sales * 0.03}`);
}

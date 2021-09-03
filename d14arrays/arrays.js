"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = { maxOfThree, sum, multiply, findLongestWord }; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {number} num1 is a number
 * @param {number} num2 is a number
 * @param {number} num3 is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(num1, num2, num3) {
  let max = num1;
  if (max < num2) {
    max = num2;
  }
  if (max < num3) {
    max = num3;
  }
  return max;
}
console.log(maxOfThree(1, 2, 3));

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
  let tot = 0;
  for (const number of arr) {
    tot += number;
  }
  return tot;
}

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
  let tot = 1;
  for (let i = 0; i < arr.length; i++) {
    tot = tot * arr[i];
  }

  return tot;
}

/**
 *
 * @param {Array} arr of words
 * @returns {number} length of the longest word
 */
function findLongestWord(arr) {
  let maxWord = 0;
  for (let word of arr) {
    if (word.length > maxWord) {
      maxWord = word.length;
    }
  }
  return maxWord;
}

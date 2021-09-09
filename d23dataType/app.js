"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam }; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {
  let word = str.slice(0, 1);
  word = word.toUpperCase();
  return word + str.slice(1);
}

function checkSpam(str) {
  return str.includes("ViAgRA") || str.includes("xxxxx");
}

function truncate(str, maxlength) {
  let word;
  if (str > maxlength) {
    word = str.slice(0, 20) + "…";

    return word;
  } else {
    return str;
  }
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {}

function camelize(str) {}

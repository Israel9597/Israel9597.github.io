"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
 */
module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {Array} arr is an array of
 * @param {*} func
 * @returns
 */
function myMap(arr, func) {
  //IMPLEMENTATION NEEDED
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = func(arr[i], i);
    newArr.push(result);
  }
  return newArr;
}

//return arr.map((item) => item * 2);

/**
 *
 * @param {Array} arr is an arrayof
 * @param {*} func
 * @returns
 */
function myFilter(arr, func) {
  //IMPLEMENTATION NEEDED
  let coll = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i)) {
      coll.push(arr[i]);
    }
  }
  return coll;
}

/**
 *
 * @param {*} arr
 * @param {*} func
 * @param {*} initialValue
 * @returns
 */
function myReduce(arr, func, initialValue) {
  //IMPLEMENTATION NEEDED
  let intial = initialValue;
  for (let i = 0; i < arr.length; i++) {
    intial = func(intial, arr[i], i);
  }
  return intial;
}

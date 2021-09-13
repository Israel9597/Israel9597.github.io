"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// //module.exports = {
//   groupById,
//   unique,
//   filterRangeInPlace,
//   filterRange,
//   Calculator,
// }; //add all of your function names here that you need for the node mocha tests

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= a && arr[i] <= b) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
//}

console.log(filterRangeInPlace([5, 3, 8, 1], 0, 3));

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word < a || word > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function Calculator(plus, minus) {
  this.calc = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 + num2,
  };

  let calc = new Calculator();

  function unique(arr) {
    let result = [];

    for (let item of arr) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }

    return result;
  }
}

function groupById(array) {
  return array.reduce((group, item) => {
    group[item.id] = item;
    return group;
  });
}

"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = {
  sumTo,
  factorial,
  fibonacci,
  outputList,
  outputListLoop,
  reverseList,
  reverseListLoop,
}; //add all of your function names here that you need for the node mocha tests

function sumTo(num) {
  if (num < 1) {
    return 0;
  } else {
    return num + sumTo(num - 1);
  }
}

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

function outputList(list) {
  if (list.next === null) {
    console.log(list.value);
  } else {
    console.log(list.value);
    outputList(list.next);
  }
}

function outputListLoop(list) {
  while (list !== null) {
    console.log(list.value);
    list = list.next;
  }
}

function reverseList(list) {
  if (list.next === null) {
    console.log(list.value);
  } else {
    reverseList(list.next);

    console.log(list.value);
  }
}

function reverseListLoop(list) {
  let item = list;
  let newArr = [];

  while (item !== null) {
    newArr.push(item.value);
    item = item.next;
  }
  for (let i = newArr.length - 1; i >= 0; i--) {
    console.log(newArr[i]);
  }
}

let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null,
};

let node4 = {
  name: "label",
  value: "Name",
  children: null,
};

let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null,
};

let node2 = {
  name: "div",
  value: null,
  children: [node4, node5],
};

let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};

function printName(tree) {
  if (tree.children === null) {
    console.log(`${tree.name} : ${tree.value}`);
  } else {
    for (let subBranch of tree.children) {
      printName(subBranch);
    }
    console.log(`${tree.name} : ${tree.value}`);
  }
}
printName(node1);

function printName2(tree) {
  console.log(`${tree.name}:${tree.value}`);
  for (let root of tree.children) {
    console.log(`${root.name}:${root.value}`);
  }
}

printName2(node1);

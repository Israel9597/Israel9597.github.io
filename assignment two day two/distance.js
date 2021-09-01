"use strict";

function calcDistance(x1, y1, x2, y2) {
  const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return console.log(d);
}
calcDistance(0, 0, 5, 5);

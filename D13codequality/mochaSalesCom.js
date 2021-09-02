"use strict";
/*eslint-disable*/
const assert = require("assert");
function computeSalesCommission(sal, amt) {
  let commission = 0;
  if (sal === true) {
    if (amt >= 300 && amt <= 500) {
      commission = amt * 0.01;
    } else if (amt > 500) {
      commission = (amt - 500) * 0.02 + 5;
    }
  } else if (sal === false) {
    if (amt >= 300 && amt <= 500) {
      commission = amt * 0.02;
    } else if (amt > 500) {
      commission = (amt - 500) * 0.03 + 10;
    }
  }
  return commission;
}
describe("test of ComputSalesCommission", function () {
  it("tests salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 200), 0);
  });
  it("tests not salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 200), 0);
  });
  it("tests salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 300), 3);
  });
  it("tests not salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 300), 6);
  });
  it("tests salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
  });
  it("tests not salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
  });
});

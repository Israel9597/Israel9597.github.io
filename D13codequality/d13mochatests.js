"use strict";
/* eslint-disable*/
/* import from functions.js module */
const assert = require("assert");
const functionsModule = require("./commissionSales.js");
const computeSalesCommission = functionsModule.computeSalesCommission;
const compoundInterest = functionsModule.compoundInterest;
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

describe("test of Compound Interest", function () {
  it("annual interest", function () {
    assert.strictEqual(compoundInterest(100, 10, 1), 110.47130674412968);
  });
  it("annual interest", function () {
    assert.strictEqual(compoundInterest(1000, 5, 10), 1647.0094976902803);
  });
});

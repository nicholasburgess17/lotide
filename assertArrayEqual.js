const eqArrays = require('./eqArrays.js')

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) ) {
    console.log(`🌈 Assertion Passed ${actual} === ${expected}`);
    return 
  }
  if (!eqArrays(actual, expected)){
    console.log(`🌋 Assertion Failed ${actual} !== ${expected}`);
    return;
  }
};


module.exports = assertArraysEqual
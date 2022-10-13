const eqObjects = require('./eqObjects')

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; 

  if (eqObjects(actual, expected)) {
    console.log(`🌈 Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }

  if (!eqObjects(actual, expected)) {
    console.log(`🌋 Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
    return;
  }
};
module.exports = assertObjectsEqual
/*
const test = {
  a: 1,
  b: 2,
};

const test2 = {
  b: 2,
  a: 1,
};

const tested = eqObjects(test, test2);

assertObjectsEqual(test, test2); 
*/

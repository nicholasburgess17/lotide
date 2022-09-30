const eqObjects = function (object1, object2) {
  let firstObj = Object.keys(object1);
  const secondObj = Object.keys(object2);

  if (firstObj.length !== secondObj.length) {
    return false;
  }

  for (let i = 0; i < firstObj.length; i++) {
    if (firstObj[i] === secondObj[i]) {
      return false;
    }
    return true;
  }
};

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

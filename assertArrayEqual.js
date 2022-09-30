const eqArrays = function (arr, arrTwo) {
  if (arr.length !== arrTwo.length) {
    return false;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arrTwo[i]) {
      return false;
    }

    return true;
  }
};

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


assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

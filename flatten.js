const assertArraysEqual = function (arr, arrTwo) {
  if (arr.length !== arrTwo.length) {
    console.log(`🌋 Assertion Failed ${arr} !== ${arrTwo}`);
    return false;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arrTwo[i]) {
      console.log(`🌋 Assertion Failed ${arr} !== ${arrTwo}`);
      return false;
    }
    
    console.log(`🌈 Assertion Passed ${arr} === ${arrTwo}`);
    return true;
  }
};
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

const flatten = function (array) {
  let newArray = Array.prototype.concat.apply([], array)
  console.log(newArray)
}
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
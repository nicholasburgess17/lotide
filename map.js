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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  console.log(array)
  console.log(callback)
  for (let item of array) {
    results.push(callback(item));
  }
  return results
}
const results = map(words, word => word[0]);
console.log(results)

assertArraysEqual(results, ["g", "c", "t", "m", "t"])


const results1 = map(words, word => word.toUpperCase());
console.log(results1)

assertArraysEqual(results1, ["GROUND", "CONTROL", "TO", 
"MAJOR", "TOM"])


const results2 = map(words, word => word.length);
console.log(results2)

assertArraysEqual(results2, [6, 7, 2, 5, 3])


const results3 = map(words, word => word.toLowerCase());
console.log(results3)

assertArraysEqual(results3, ["ground", "control", "to", "major", "tom"])
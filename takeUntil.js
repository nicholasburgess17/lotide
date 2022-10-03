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


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
     results.push(item)
     
    } if (callback(item)) {
      return results 
    } 
  } return results
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])
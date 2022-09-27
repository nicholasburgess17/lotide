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

/*const middle = function (array) {
  for (let i = 0; i < array.length; i++) {
    // sorts into even and odds
    if (array % 2 === 0) {
      let even = [];
    }
    //sorts odds, (may not be necessary)
    if (array % 2 !== 0) {
      let odd = [];
    }
  }
};
*/
const middle = function (array) {
  if (array.length <= 2) {
    return []
  }
  const half = array.length >> 1;
  const offset = 1 - array.length % 2;
  return array.slice(half - offset, half + 1)
  
};

//TEST CASES

console.log(middle([1, 2, 3, 4])) // [2, 3]
console.log(middle([1, 2, 3])) // [2]
console.log(middle([1])) // []
console.log(middle([1, 2])) // []

/*
assertArraysEqual(middle([1, 2, 3, 4], [2, 3]))
assertArraysEqual(middle([1, 2, 3], [2]))
assertArraysEqual(middle([1, 2], []))
assertArraysEqual(middle([1], []))
*/
/*
eqArrays((middle([1, 2, 3, 4]), [2,3])); // [2, 3]
eqArrays((middle([1, 2, 3]),[2])); // [2]
eqArrays((middle([1]), [])); // []
eqArrays((middle([1, 2]), [])); // []
*/
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

const without = function (source , itemsToRemove) {
  let answer = [];
  for (let i = 0; i < source.length; i++) {

    if (!itemsToRemove.includes(source[i])) {
     answer.push(source[i]);
    }
  } return answer
};

//test cases
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without([1, 2, 3 , "yes"], [1])) // => [2, 3 "yes"]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3, "no"], [1, 3, "no"])) // => [2]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
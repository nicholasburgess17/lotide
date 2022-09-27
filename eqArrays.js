const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🌈 Assertion Passed ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🌋 Assertion Failed ${actual} !== ${expected}`);
  }
};

/*const eqArrays = function (arr , arrTwo) {
  let newArr = []
  let newArrTwo = []
  for (let i = 0; i < arr.length; i++) {
   newArr = arr
   for (let j = 0; j < arrTwo.length; j++){
    newArrTwo = arrTwo
   }
    if (newArr === newArrTwo) {
      return true
  } else {
    return false
  }
  } 
  console.log(newArr)
  console.log(arrTwo)
} 

*/ /*
const eqArrays = function (arr , arrTwo) {
  let nArr = [];
  let nArrTwo = [];
  nArr += arr
  nArrTwo += arrTwo

  console.log(nArrTwo)
  console.log(nArr)
  if (nArr === nArrTwo) {
    return true
  } else {
    return false
  }
} 
*/

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

/*
const eqArrays = function (arr , arrTwo) {
  if (arr === arrTwo) {
    console.log(true)
  } else {
    console.log(false)
  }
}
*/
(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
const equal = assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => false

(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true


(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false
(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS

const result = eqArrays(["1", "2", "3"], ["1", "2", 3]);
(result)
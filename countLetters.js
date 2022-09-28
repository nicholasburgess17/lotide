const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🌈 Assertion Passed ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🌋 Assertion Failed ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const result = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  console.log(result);
  return result;
};

const string = "this should be shorter";
const result2 = countLetters(string, " ");

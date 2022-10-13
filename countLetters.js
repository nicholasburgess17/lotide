//const assertEqual = require('./assertEqual')

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

module.exports = countLetters
/*
const string = "this should be shorter";
const result2 = countLetters(string, " ");
*/
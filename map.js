//const eqArrays = require('./eqArrays')
//const assertArraysEqual = require('./assertArrayEqual')
//const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results
}
module.exports = map
/*
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
*/
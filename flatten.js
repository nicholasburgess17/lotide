/*const assertArrayEqual = require('./assertArrayEqual')
const eqArrays = require('./eqArrays')
*/
const flatten = function (array) {
  let newArray = Array.prototype.concat.apply([], array)
  console.log(newArray)
}
module.exports = flatten
/*
//tests
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6] */
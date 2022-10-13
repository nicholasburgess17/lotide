//const assertEqual = require('./assertEqual')

const findKeyByValue = function (object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
module.exports = findKeyByValue
/*
// Test Cases

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); */
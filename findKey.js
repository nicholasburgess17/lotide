//const assertEqual = require('./assertEqual')

const findKey = function (outerObject, callback) {
  for (const [outerKey, innerObject] of Object.entries(outerObject)) {
    if (callback(innerObject)) {
      // console.log(outerKey)
      return outerKey;
    }
  } 
};
module.exports = findKey

/*
//test
const myObject = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const myCallback = (secondObject) => {
  return secondObject.stars === 2;
};

const result = findKey(myObject, myCallback); // => "noma

console.log(result);

const anotherObject = {
  "Blue Hill": { stars: "banana" },
  Akaleri: { stars: "orange" },
  noma: { stars: "you" },
  elBulli: { stars: "glad" },
  Ora: { stars: "i" },
  Akelarre: { stars: "didnt" },
  "3:10 to yuma": { stars: "say" },
  "the dark knight": { stars: "banana" },
};
const myCallback2 = (secondObject) => {
  return secondObject.stars === "say";
};

const result2 = findKey(myObject, myCallback2); // => "undefined"

console.log(result2);

const result3 = findKey(anotherObject, myCallback2); // => "say" > 3:10 to yuma

console.log(result3);
*/
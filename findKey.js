const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈 Assertion Passed ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🌋 Assertion Failed ${actual} !== ${expected}`);
  }
};

//looking for a key that holds an inner object containing a value ran through my callback
    // loop through first oject
    // loop through second object(dont need)
    // see if any of the values match my callback 
    //(does the inner object meet the callbacks conditions)
  

const findKey = function (outerObject, callback) {
  for(const [outerKey, innerObject] of Object.entries(outerObject)) {
    if (callback(innerObject)) {
     // console.log(outerKey)
      return outerKey
    }
  } /*

  //More readable... Also works fine (one extra line of code)


  for (let outerKey in outerObject) {
    
    const innerObject = outerObject[outerKey]
    
    if (callback(innerObject)) {
     // console.log(outerKey)
      return outerKey
    }

    
  }*/
     return undefined
};
//test
const myObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2},
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const myCallback = (secondObject) => {
  return secondObject.stars === 2
}

const result = findKey(myObject, myCallback) // => "noma

console.log(result)

const anotherObject = {
  "Blue Hill": { stars: "banana"},
  "Akaleri":   { stars: "orange" },
  "noma":      { stars: "you"},
  "elBulli":   { stars: "glad" },
  "Ora":       { stars: "i" },
  "Akelarre":  { stars: "didnt" },
  "3:10 to yuma":      { stars: "say"},
  "the dark knight":   { stars: "banana" },
}
const myCallback2 = (secondObject) => {
  return secondObject.stars === "say"
}


  const result2 = findKey(myObject, myCallback2) // => "undefined"

  console.log(result2);

  const result3 = findKey(anotherObject, myCallback2) // => "say" > 3:10 to yuma

  console.log(result3);
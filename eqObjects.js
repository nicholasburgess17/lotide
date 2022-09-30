const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈 Assertion Passed ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🌋 Assertion Failed ${actual} !== ${expected}`);
  }
};

/*const eqObjects = function(object1, object2) {
  let firstObj= Object.keys(object1);
  const secondObj = Object.keys(object2);

  if (firstObj.length !== secondObj.length) {
    return false;
  } 
  
  for (let i = 0; i < firstObj.length; i++) {
    let val1 = object1[firstObj[i]];
    let val2 = object2[secondObj[i]]
    let objects = Object.is(object1) && Object.is(object2)
    console.log(val1)

    if (objects && isEqual(val1, val2)) {
      return true
    } 
  } 
  return false
};
*/


const eqObjects = function(object1, object2) {
  let firstObj= Object.keys(object1);
  const secondObj = Object.keys(object2);

  if (firstObj.length !== secondObj.length) {
    return false;
  }

  for (let i =0; i < firstObj.length; i++) {
    if (firstObj[i] === secondObj[i]){
      return false
    }
    return true
  } 
}




//Test Cases

const test1 = {
  a: "17",
  b: "42"
};
const test2 = {
  b: "42",
  a: "17"
};
console.log(eqObjects(test1, test2)); // => true
assertEqual(eqObjects(test1, test2), true)

const test3 = {
  a: "one",
  b: "two",
  c: "three"
};

console.log(eqObjects(test1, test3)); // => false
assertEqual(eqObjects(test1, test3), false)


// test cases with arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true)

const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false)
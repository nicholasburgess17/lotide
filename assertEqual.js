const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈 Assertion Passed ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🌋 Assertion Failed ${actual} !== ${expected}`);
  }
};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("yes", "yes");
assertEqual(7, 9);
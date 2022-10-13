const assertArraysEqual = require('../assertArrayEqual.js')

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "7"]); // fail
assertArraysEqual([1, 2, 3], ["1", "2", "3"]); //fail
assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass

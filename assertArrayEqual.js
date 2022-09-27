const assertArraysEqual = function (arr, arrTwo) {
  if (arr.length !== arrTwo.length) {
    console.log(`🌋 Assertion Failed ${arr} !== ${arrTwo}`);
    return false;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arrTwo[i]) {
      console.log(`🌋 Assertion Failed ${arr} !== ${arrTwo}`);
      return false;
    }
    console.log(`🌈 Assertion Passed ${arr} === ${arrTwo}`);
    return true;
    
  }

  /*if (true) {
    console.log(`🌈 Assertion Passed ${arr} === ${arrTwo}`);
  };

  if (false) {
    console.log(`🌋 Assertion Failed ${arr} !== ${arrTwo}`);
  }*/
}


assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

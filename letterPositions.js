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
};

const letterPositions = function(sentence) {
  const results = {}; 
    for (let i = 0; i < sentence.length; i++) {
        if (results[sentence[i]]) {
          results[sentence[i]].push([i])
    } else {
      results[sentence[i]] = [i]
    }
  }
  console.log(results)
  return results;
};
//test cases

assertArraysEqual(letterPositions("hello").l, [2, 3]);


letterPositions("wake up donkey").e
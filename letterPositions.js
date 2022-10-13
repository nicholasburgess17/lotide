//const assertArraysEqual = require('./assertArrayEqual')

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
module.exports = letterPositions
/*
//test cases

assertArraysEqual(letterPositions("hello").l, [2, 3]);


letterPositions("wake up donkey").e */
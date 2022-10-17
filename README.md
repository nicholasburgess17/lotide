# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nicholasburgess17/lotide`

**Require it:**

`const _ = require('@nicholasburgess17/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`head`: returns the first index of an array
*`tail`: returns an array without the first array
*`middle`: returns the exact middle of an array
*`eqArrays`: asserts that an array is correctly output
*`assertArraysEqual`: asserts that the arrays are output as expected
*`assertEqual`: asserts that an output is as expected
*`countLetters`: counts the letters in an array
*`eqObjects`: asserts that an object is output as expected
*`countOnly`: coutns a specific item in any given array
*`flatten`: flattens nested arrays into one array
*`findKeyByValue`: find the key of an object by its value
*`findKey`: find a key in an object
*`letterPositions`: returns the positions of a letter in a string
*`map`: returns a new array with the results of a callback function
*`takeUntil`: returns the items in a collection until a given callback is true
*`without`: returns an array without a given value
*`assertObjectsEqual`: asserts that objects are output asexpected

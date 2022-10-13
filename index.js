//functions

const head = require('./head')
const tail = require('./tail')
const middle = require('./middle')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const flatten = require('./flatten')
const findKeyByValue = require('./findKeyByValue')
const findKey = require('./findKey')
const letterPositions = require ('./letterPositions')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')

//assertions
const assertArraysEqual = require('./assertArrayEqual.js')
const assertEqual = require('./assertEqual.js')
const eqArrays = require('./eqArrays.js')
const eqObjects = require('./eqObjects')
const assertObjectsEqual = require('./assertObjectsEqual')


module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  countLetters,
  eqObjects,
  countOnly,
  flatten,
  findKeyByValue,
  findKey,
  letterPositions,
  map,
  takeUntil,
  without,
  assertObjectsEqual,
};
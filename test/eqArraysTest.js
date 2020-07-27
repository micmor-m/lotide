// // //Testing without mocha and chai
// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');

// //For test
// //console.log(eqArrays([], [])); // => true
// //console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// //console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// //console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

//Testing with mocha and chai
const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');

describe("#eqArrays", () => {

  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true for [\"1\", \"2\", \"3\"], [\"1\", \"2\", \"3\"]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false for [\"1\", \"2\", \"3\"], [\"1\", \"2\", 3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

});
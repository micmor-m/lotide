// //Testing without mocha and chai
// const assertArraysEqual = require('../assertArraysEqual');
// const flatten = require('../flatten');
//
//assertArraysEqual(flatten([1, 2, [3, [1,2,2,[4, [6, 7, [8, 9, [1]]]], 5, [6]]]]), [1, 2, 3, 1, 2, 2, 4, 6, 7, 8, 9, 1, 5, 6]);

//Testing with mocha and chai
const assert = require('chai').assert;
const flatten   = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 1, 2, 2, 4, 6, 7, 8, 9, 1, 5, 6] for [1, 2, [3, [1,2,2,[4, [6, 7, [8, 9, [1]]]], 5, [6]]]]", () => {
    assert.deepEqual(flatten([1, 2, [3, [1,2,2,[4, [6, 7, [8, 9, [1]]]], 5, [6]]]]), [1, 2, 3, 1, 2, 2, 4, 6, 7, 8, 9, 1, 5, 6]);
  });

});
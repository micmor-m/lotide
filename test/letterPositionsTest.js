//Testing without mocha and chai
//const assertEqual = require('../assertEqual');
//const letterPositions = require('../letterPositions');

//For test
//letterPositions("lighthouse in the house");
//letterPositions("  lighthouse     in the houoooooooooooooose")

// assertEqual(letterPositions("lighthouse in the house")["l"], [2]);
// assertEqual(letterPositions("lighthouse in the house")["q"], undefined);
// assertEqual(letterPositions("lighthouse in the hooooouse")["o"], [6, 19]);


//Testing with mocha and chai
const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [0] for (\"lighthouse in the house\")[\"l\"]", () => {
    assert.deepEqual(letterPositions("lighthouse in the house")["l"], [0]);
  });

  it("returns undefined for (\"lighthouse in the house\")[\"q\"]", () => {
    assert.deepEqual(letterPositions("lighthouse in the house")["q"], undefined);
  });

  it("returns [6, 19] for (\"lighthouse in the house\")[\"o\"]", () => {
    assert.deepEqual(letterPositions("lighthouse in the house")["o"], [6, 19]);
  });
  
});
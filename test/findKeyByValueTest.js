// //Testing without mocha and chai
// const assertEqual = require('../assertEqual');
// const findKeyByValue = require('../findKeyByValue');

// //For test
// //console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The"),  undefined);

//Testing with mocha and chai
const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns \"drama\" for (bestTVShowsByGenre, \"The Wire\")", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for (bestTVShowsByGenre, \"That '70s Show\")", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns \"sci_fi\" for (bestTVShowsByGenre, \"The Expanse\")", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it("returns undefined for (bestTVShowsByGenre, \"The\")", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The"), undefined);
  });

});

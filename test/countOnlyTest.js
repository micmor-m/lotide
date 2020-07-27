// //Testing without mocha and chai
// const assertEqual = require('../assertEqual');
// const countOnly = require('../countOnly');
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);


//Testing with mocha and chai
const assert = require('chai').assert;
const countOnly   = require('../countOnly');


describe("#countOnly", () => {
  
  //For test
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  it("returns 1 for { \"Jason\": true, \"Karima\": true, \"Fang\": true }", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), {Fang: 2, Jason: 1});
  });

});
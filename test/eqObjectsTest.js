//Testing without mocha and chai
// const assertEqual = require('../assertEqual');
// const eqObjects = require('../eqObjects');

//Primitive value
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// //const ab = { a: 4, b: "2" };
// //const ba = { b: "sl", a: 4 };
// //console.log(eqObjects(ab, ba)); // => true
// const abc = { a: "1", b: "2", c: "3" };
// //console.log(eqObjects(ab, abc)); // => false
// //For test
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// //Array as value
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true
// const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(cd, dc), true);
//assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
//assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
//eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true
//eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
//eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
//assertEqual(eqObjects({ a: { z: [1, 3, 4, 5], y: "hello"}, b: 2 }, { a: { z: [1, 3, 4, 5], y: "hello" }, b: 2 }), true);
//assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

//Testing with mocha and chai
const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

describe("#eqObjects", () => {

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it("returns true for eqObjects(ab, ba)", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("returns false for eqObjects(ab, abc)", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("returns true for eqObjects(cd, dc)", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it("returns false for eqObjects(cd, cd2)", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });


});
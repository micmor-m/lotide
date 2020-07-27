//Testing without mocha and chai
// const assertEqual = require('../assertEqual');
// const head = require('../head');
// TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Labs"]), "Hello");
// assertEqual(head([]), "Hello");

//Testing with mocha and chai
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns '5' for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5); 
  });

  it("returns \"Hello\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

  it("returns \"Labs\" for [\"Labs\"]", () => {
    assert.strictEqual(head(["Labs"]), "Labs"); 
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });

});
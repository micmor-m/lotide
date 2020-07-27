const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//For test
//console.log("Hi");
middle([]);
middle([1, 2, 3, 4]);
middle(["1", "2", "3"]);
middle(["1", "2", 3]);
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 3, 3, 4, 5, 6]); // => [3, 4]
middle([true, true, false]);

assertArraysEqual(middle([]), []); // => true
assertArraysEqual(middle([1, 2]), []); // => true
assertArraysEqual(middle(["1", "2", "3"]), ["2"]); // => true
assertArraysEqual(middle(["1", "2", 3, 4]), ["2", 3]); // => true
assertArraysEqual(middle(["1", "2", 3, 4]), [3, 4]); // => false
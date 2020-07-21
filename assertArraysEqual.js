/*
Implement assertArraysEqual which will
 take in two arrays and console.log an appropriate message to the console.
*/
const assertArraysEqual = function(array1, array2) {
  //check if each element are identical
  let err = 0;
  if (array1.length !== array2.length) {
    err = 1;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        err = 2;
      }
    }
  }
  
  //resturn message base on the result
  if (err === 0) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (err === 1) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2} different lenght`);
  } else if (err === 2) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2} same length but different elements`);
  }
};

//For test
assertArraysEqual([], []); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false







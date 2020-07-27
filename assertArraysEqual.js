const eqArrays = require('./eqArrays');

/*
Implement assertArraysEqual which will
 take in two arrays and console.log an appropriate message to the console.
*/
const assertArraysEqual = function(array1, array2) {   
  //resturn message base on the result
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  } 
};

module.exports = assertArraysEqual;






/*
return a subset of a given array, removing unwanted elements.
*/
const without = function(source, itemsToRemove) {
  //make a copy of the source
  let sourceCopy = [];
  for (let i = 0; i < source.length; i++) {
    sourceCopy.push(source[i]);
  }
  let indexToRemove = [];
  //check for the index of double element in copySource
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < sourceCopy.length; j++) {
      if (itemsToRemove[i] === sourceCopy[j]) {
        indexToRemove.push(j);
      }
    }
  }
  //console.log("Index to remove:", indexToRemove);
  
  //remove the index of double elements in copySource
  //from last to the first index for do not scramble the indexes
  for (let i = indexToRemove.length - 1; i >= 0; i--) {
    sourceCopy.splice(indexToRemove[i], 1);
    //for (let j = i; j < itemsToRemove.length; j++) {
  }
  //console.log(sourceCopy);
  //console.log(source);
  return sourceCopy;
};

//For test
without([1, 4, 4, 4, 2, 3, 4, 4, 4, 4], []); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]



/*
take in two arrays and console.log an appropriate message to the console base if they are equal or not.
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
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

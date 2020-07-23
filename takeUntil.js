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

/*
It will take in two parameters as well:

1. The array to work with
2. The callback (which Lodash calls "predicate")

The function will return a "slice of the array with elements taken from the beginning".
It should keep going until the callback/predicate returns a truthy value.

the callback should only be provided one value: The item in the array.

*/
const takeUntil = function(array, callback) {
  //console.log("Array: ", array);
  //console.log("Call back: ", callback);
  
  //empty array
  let result = [];
  //pseudo iteration variable
  let i = 0;
  array.forEach(element => {
    if (i === 0){
      //console.log("Element: ", element);
      //let a = callback(element);
      //console.log("return from call back:", a);
      if (!callback(element)) {
        result.push(element)
      } else {
        i++;
      }
    }
  });
  return result;
}
 

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
//Expected output
//[ 1, 2, 5, 7, 2 ]


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
//Expected output
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/
console.log(assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0 ), [ 1, 2, 5, 7, 2 ])); 
console.log(assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ',' ), [ 'I\'ve', 'been', 'to', 'Hollywood' ])); 
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


/* ITERATION VERSION
function flatten takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
for now only handle one level of nesting.
eg. flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

const flatten = function(array) {
let flatArr = [];

for (let element of array)
if (Array.isArray(element)) {
  for (let value of element)
  flatArr.push(value);
} else {
  flatArr.push(element);
}
return flatArr;
};
*/


/* RECURSION VERSION
function flatten takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
ANY level of nestining because recursion
eg. flatten([1, 2, [3, [1,2,2,[4, [6, 7, [8, 9, [1]]]], 5, [6]]]]) // => [1, 2, 3, 1, 2, 2, 4, 6, 7, 8, 9, 1, 5, 6]
*/
const flatten = function(array) {
  let flatArr = [];
  //for each iem of the array
  for (let item of array) {
    //if array call again the function and concatenate its return array to flatArr
    //is important to use concat, cannot use push otherwise it will push again the returned array in to flatArr and it will be still nested
    if (Array.isArray(item)) {
      flatArr = flatArr.concat(flatten(item));
    //if not array but just a number push it directly
    } else {
      flatArr.push(item);
    }
  }
  
  return flatArr;
};

assertArraysEqual(flatten([1, 2, [3, [1,2,2,[4, [6, 7, [8, 9, [1]]]], 5, [6]]]]), [1, 2, 3, 1, 2, 2, 4, 6, 7, 8, 9, 1, 5, 6]);
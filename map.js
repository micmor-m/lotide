//ASSERT ARRAY EQUAL
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
function will take in two arguments:
1. an array to map
2. A callback function
will return a new array based on the results of the callback function.
*/

//const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  //console.log('array: ', array);
  //console.log('callback: ', callback);
  const results = [];
  
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    results.push(callback(item));
  }

  return results;
}



//const results1 = map(words, word => word[0]);
//console.log(results1);


assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map([1, 34, 56, -34,], num => num + 50), [51, 84, 106, 16]);
assertArraysEqual(map([0, 34, 56, -34,], num => !num), [true, false, false, false]);
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word.toUpperCase()), [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);
//assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0] + 5 ), [ 'g', 'c', 't', 'm', 't' ]);
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


/*
MIDDLE FUNCTION will take in an array and return the middle-most element(s) of the given array:
-For arrays with one or two elements, there is no middle. Return an empty array.
-For arrays with odd number of elements, an array containing a single middle element should be returned.
-For arrays with an even number of elements, an array containing the two elements in the middle should be returned
*/
const middle = function(array) {
  const arrayMiddle = [];
  let index = (Math.floor(array.length / 2));

  //for array shorter or equal 2 do nothing
  //for array longer than 2 if odd
  if (array.length > 2 && array.length % 2 !== 0) {
    arrayMiddle.push(array[index]);
  }
  //for array longer than 2 if even
  if (array.length > 2 && array.length % 2 === 0) {
    arrayMiddle.push(array[(index - 1)]);
    arrayMiddle.push(array[index]);
  }
  //console.log(arrayMiddle);
  return arrayMiddle;
  
};


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
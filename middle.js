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

module.exports = middle;
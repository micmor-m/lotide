/*
will return all the indices (zero-based positions)
in the string where each character is found.
*/

const letterPositions = function(sentence) {
  //create empty object
  let results = {};
  
  //declare each key of the object as empty array
  for (const char of sentence) {
    if (char !== " ") {
      if (results[char] === undefined) {
        results[char] = [];
      }
    }
  }
  
  //feel in the empty array
  let i = 0;
  for (const char of sentence) {
    if (char !== " ") {
      if (results[char] !== undefined) {
        results[char].push(i);
      }
    }
    i += 1;
  }
  
  //console.log(results);
  return results;
};

module.exports = letterPositions;
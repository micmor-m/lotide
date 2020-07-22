// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//For test
//letterPositions("lighthouse in the house");
//letterPositions("  lighthouse     in the houoooooooooooooose")

assertEqual(letterPositions("lighthouse in the house")["l"], [2]);
assertEqual(letterPositions("lighthouse in the house")["q"], undefined);
assertEqual(letterPositions("lighthouse in the hooooooooooooooouse")["o"], [6, 19]);
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


/*
The function should take in a sentence (as a string)
and then return a count of each of the letters in that sentence.
and return an object with key the letter and values the time that the letter appear in the string.
*/
const countLetters = function(string) {
  //create an empty object to return
  const results = {};

  //let i = 0;
  for (const char of string) {
    if (char !== " ") {
      if (results[char] !== undefined) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  //console.log(results);
  return results;

};


//For test
//countLetters("lighthouse in the house");
//countLetters("  lighthouse     in the houoooooooooooooose")

assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["q"], undefined);
assertEqual(countLetters("lighthouse in the hooooooooooooooouse")["o"], 2);

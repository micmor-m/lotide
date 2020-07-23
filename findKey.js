// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
function findKey which takes in an object and a callback.
It should scan the object and return the first key for which the callback
returns a truthy value. If no key is found, then it should return undefined.
*/
const findKey = function(object, callback) {
  for (let key in object) { //FOR .. IN loop through all KEYS of the object
    if (callback(object[key])) { //object[key] is the value of the KEY (in this case an Object itself)
      return key;                //callback return me TRUE of FALSE base on the function   job declared when I call the  function find.key
    }
  }
  return undefined;
};

/*
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1); // => "noma"
*/

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), "Blue Hill");

assertEqual(findKey({
  "Blue Hill": { stars: 1, triangle: 4},
  "Pizza":     { stars: 3, triangle: 6},
  "noma":      { stars: 2, triangle: 5},
  "elBulli":   { stars: 3, triangle: 4},
  "Ora":       { stars: 2, triangle: 6},
  "Akelarre":  { stars: 3, triangle: 4}
}, x => x.triangle === 6), "Pizza");




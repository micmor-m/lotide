// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

/*
function eqObjects which will take in two objects and
returns true or false, based on a perfect match.
*/
const eqObjects = function(object1, object2) {
  
  //if different number of key return false
  let lengthObj1 = Object.keys(object1).length;
  let lengthObj2 = Object.keys(object2).length;
  //console.log(lengthObj1);
  if (lengthObj1 !== lengthObj2) {
    return false;
  }

  //get array of the keys of an object
  let arrayKeys = Object.keys(object1); //Object.keys(object1) get all keys of the object as array
  //console.log(arrayKeys);
  
  
  for (let key of arrayKeys) { //FOR .. OF loop through all KEY of the KEY array got by Object.keys(object1)
    //console.log("Key", key);
    let Obj1IsArray = (Array.isArray(object1[key])); //check if both value of the key are array
    let Obj2IsArray = (Array.isArray(object2[key]));
    //console.log("Obj1 is array", Obj1IsArray);
    //console.log("Obj2 is array", Obj2IsArray);

    if (Obj1IsArray && Obj2IsArray) { //if both are array
      let qArrayResult = eqArrays(object1[key], object2[key]); //run the eq Array function
      if (qArrayResult === false) { //if eqArray return false return false and exit the function
        return false;
      }
    } else { //if not array consider them primitive value and check them
      if (object1[key] !== object2[key]) {
        //console.log("Obj1", object1[key]);
        //console.log("Obj2", object2[key]);
        return false;
      }
    }
  }
  return true;
};


//Primitive value
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//const ab = { a: 4, b: "2" };
//const ba = { b: "sl", a: 4 };
//console.log(eqObjects(ab, ba)); // => true
const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false
//For test
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

//Array as value
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

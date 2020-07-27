const eqArrays = require('./eqArrays');

/*
function eqObjects which will take in two objects and
returns true or false, based on a perfect match.
*/
const eqObjects = function(object1, object2) {
  
  //if different number of key return false
  let lengthObj1 = Object.keys(object1).length;
  let lengthObj2 = Object.keys(object2).length;
  //console.log(lengthObj1);
  //console.log(lengthObj2);
  if (lengthObj1 !== lengthObj2) {
    return false;
  }

  //get array of the keys of an object
  let arrayKeys = Object.keys(object1); //Object.keys(object1) get all keys of the object as array
  //console.log(arrayKeys);
  
  
  for (let key of arrayKeys) { //FOR .. OF loop through all KEY of the KEY array got by Object.keys(object1)
    //console.log("Key", key);
    //console.log("Obj1-key " + object1[key]);
    //console.log("Obj2-key " + object2[key]);
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
    }  //for now comment out this part of object for recursion!!!!!!!!!!!!!!!!!
    // } else { //if not array consider them object
    //   eqObjects(object1[key], object2[key]);
    // }
  }
  return true;
};

module.exports = eqObjects;
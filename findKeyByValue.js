/*
takes in an object and a value. It scan the object and
return the first key which contains the given value.
If no key with that given value is found, then it should return undefined.

NOTE if same string in two or more value return the last one only
*/
const findKeyByValue = function(object, string) {
  //let str;
  
  for (let key in object) { //FOR .. IN loop through all KEYS of the object
    //console.log(key);
    if (object[key] === string) { //object[key] is the value of that key, if it match the string
      //console.log(object[key]);
      //////str = key; //get the key
      return key
    }
  }
  //console.log(str)
  //////////return str;
  return undefined
};

module.exports = findKeyByValue;
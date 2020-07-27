const assertEqual = require('./assertEqual');

const tail = function(array) {
  const arrayTail = [];
  
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  //console.log(arrayTail);
  return arrayTail;
};

module.exports = tail;


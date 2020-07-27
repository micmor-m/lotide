const assertEqual = require('../assertEqual');
const head = require('../head');
// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Labs"]), "Hello");
assertEqual(head([]), "Hello");
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case:
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2); 
assertEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3); // original array should still have 3 elements!
let result = [];
result = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

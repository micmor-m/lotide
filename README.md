# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @micmor-m/lotide`

**Require it:**

`const _ = require('@micmor-m/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: It takes in two arrays and console.log an appropriate message to the console base if they match or not.
* `assertEqual(actual, expected)`: It takes in two values and console.log an appropriate message to the console base if they match or not.
* `assertObjectsEqual(actual, expected)`: It takes in two objects and console.log an appropriate message to the console base if they match or not.
* `countLetters(string)`: It takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: It takes in a collection of items and return counts for a specific subset of those items. It won't count everything.
* `eqArrays(array1, array2)`: It takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: It takes in two objects and returns true or false, based on a perfect match.
* `findKey(object, callback)`: It takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(object, string)`: It takes in an object and a value. It scans the object and return the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `flatten(array)`: It takes in an array containing elements including nested arrays of elements (any level of nestining), and return a "flattened" version of the array.
* `head(array)`: It returns the first element of an array not as an array but as element itself.
* `letterPositions(sentence)`: It returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: It returns a new array based on the results of the callback function.
* `middle(array)`: It takes in an array and return the middle-most element(s) of the given array.
* `tail(array)`: It returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(array, callback)`: It will take in two parameters (the array to work with and the callback). It return a "slice of the array with elements taken from the beginning."
* `without(source, itemsToRemove)`: It returns a subset of a given array, removing unwanted elements.


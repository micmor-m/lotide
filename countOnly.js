/*
This function should take in a collection of items and return counts
for a specific subset of those items. It won't count everything.
In order to decide what to count, it will also be given an idea of which items
 we care about and it will only count those, ignoring the others.

Items in our case will be limited to Strings.
*/

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  //let i = 0;
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item] !== undefined) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  //console.log(results);
  return results;
};

module.exports = countOnly;


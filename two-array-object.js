// add whatever parameters you deem necessary


function twoArrayObject(keys, values) {
  const obj = {};

  let idx = 0;
  while (idx < keys.length) {
    if (idx < values.length) {
      obj[keys[idx]] = values[idx];
    }
    else obj[keys[idx]] = null;
    idx++;
  }
  return obj;
}

// course solution - using reduce()

/**
 * Convert the keys array into an object using Array.prototype.reduce.
 *  In the reduce callback function, set the current value as a key in
 *  the accumulator object, with the value set to whatever element is
 *  at the current index in the values array.
 *
 *  MDN reduce -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */


// function twoArrayObject(keys, values) {
//   return keys.reduce((obj, cur, idx) => {
//     obj[cur] = idx < values.length ? values[idx] : null;
//     return obj;
//   }, {});
// }

module.exports = twoArrayObject;
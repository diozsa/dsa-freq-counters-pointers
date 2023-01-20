// add whatever parameters you deem necessary
// Time Complexity - O(N + M)

function sameFrequency(num1, num2) {

  let obj1 = {};
  let obj2 = {};

  for (char of num1.toString())
    obj1[char] = obj1[char] + 1 || 1;
  for (char of num2.toString())
    obj2[char] = obj2[char] + 1 || 1;
  
  for (key in obj1)
    if (obj1[key] !== obj2[key]) return false;
  
  return true;
  }

module.exports = sameFrequency;
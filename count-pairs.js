// add whatever parameters you deem necessary
// Time complexity O(N)

//Because there are no duplicate values, a Set can be implemented

function countPairs(arr, num) {
  let set = new Set(arr);
  let count = 0;

  for (let i = 0; i < arr.length; i++){
    set.delete(arr[i]);
    if (set.has(num - arr[i])) count++;
    
  }
  return count;
}

module.exports = countPairs;
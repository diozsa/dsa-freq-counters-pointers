// add whatever parameters you deem necessary
//Time complexity O(N)

function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  if (arr === "") return false;
  while (start <= end) {
    const avg = arr[start] + arr[end] / 2;
    if (avg === target) return true;
    else if (avg > target) end--;
    else start++;
  }
  return false;
}

module.exports = averagePair;
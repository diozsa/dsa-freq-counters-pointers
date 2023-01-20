// add whatever parameters you deem necessary
// Time Complexity - O(N + M)

function separatePositive(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] < 0 && arr[end] > 0) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start ++;
      end--;
    }
    if (arr[start] > 0) start ++; 
    if (arr[end] < 0) end--;
    
  }
  return arr;
}

module.exports = separatePositive;
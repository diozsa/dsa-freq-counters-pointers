// add whatever parameters you deem necessary
// O(N)
function longestFall(nums) {
  let counter = 1;
  let maxCounter = 0;

  if (nums.length === 0) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] < nums[i]){
      counter++;
      maxCounter = Math.max(counter, maxCounter);
    } else {
      //counter reset to 1 for current if statement
      counter = 1;
    }
  }

  // 1 is the default value for a non-empty array
  return maxCounter || 1;
}

module.exports = longestFall;


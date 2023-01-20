// add whatever parameters you deem necessary
//Time Complexity - O(N + M)

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  
  let i = j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
      if (i >= str1.length) return true;
    }
    else {
      j++;
    }
  }
  return false;

}

module.exports = isSubsequence;
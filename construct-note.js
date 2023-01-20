// add whatever parameters you deem necessary
// Time Complexity: O(M + N)
// M is the length of message and N is the length of letters

function constructNote(str1, str2) {
  
  //freqquency couter function
  function freqCounter(str) {
    let obj = {};
    for (let char of str) {
      obj[char] = obj[char] + 1 || 1;
    }
    return obj;
  }

  // for a non-empty message, str2 cannot be empty string
  if (str1 !== "" && str2 === "") return false;

  let msg = freqCounter(str1);
  let letters = freqCounter(str2);

  // character keys count in letters
  // cannot be smaller than total keys in message
  if (Object.keys(letters).length < Object.keys(msg).length)
    return false;
  
   //compare frequencies between str1 and str2
  for (let key in msg) {
    if (letters[key] < msg[key])
      return false;
  }
  return true;
 
}

module.exports = constructNote;
function reverseString(word){
  let wordArr = word.split('');
  let reversedArr = wordArr.reverse();
  return reversedArr.join(''); 
}


function isPalindrome(word) {
  return word == reverseString(word);
}

/* 
  Add your pseudocode here
  array = word
  reversed array = array.reverse()
  new string = joined array
  if new string == word, return true
  else return false 
*/

/*
  Add written explanation of your solution here

  Convert the input string to an array so we can use JS's reverse method on it. 
  After reversing, convert it back to a string and compare it to the original input. 
  If they're equal, then it's a palendrome 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("noon"));
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("moon"));
}

module.exports = isPalindrome;

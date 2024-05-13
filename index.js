function isPalindrome(word) {
  // Write your algorithm here

  for (let i = 0; i < word.length / 2; i++) {
    // Check if characters at positions i and (str.length - 1 - i) are equal
    if (word[i] !== word[word.length - 1 - i]) {
      return false; // If not equal, it's not a palindrome
    }
  }
  return true; // If the loop completes, it's a palindrome
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

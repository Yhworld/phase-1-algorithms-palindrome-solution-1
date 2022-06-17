function isPalindrome(word) {
  // Write your algorithm here
  const wordSplit = word.split('');
  const wordReverse = wordSplit.reverse();
  const wordJoin = wordReverse.join('');

  if (word == wordJoin) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('racecar'))
/* 
  Add your pseudocode here
  1. isPalindrome(word)
  2. const wordSplit = word.split('');
  3. const wordReverse = wordSplit.reverse();
  3. const wordJoin = wordReverse.join('');
  4. if (word == wordJoin);
  5. return true;
  6. else return false
*/

/*
  Add written explanation of your solution here
  1. declare the isPalindrome function 
  2. declare a variable which contains the parameter with the method .split() which split the value of the parameter into array like structure
  3. declare a variable which contains the previous declared variable with a reverse method which reverses the wordSplit variable
  4. declare a variable which contains the reversed arguements and use the method join to join the arrays since they were split with the split method during our first variable declarations
  5. use an if statement to compare the actual parameter vs the reversed variable, return true if the reversed word and actual word is true if not return false.
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

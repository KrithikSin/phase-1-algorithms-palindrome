function isPalindrome(word) {
    // Write your algorithm here
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }

    if (reverseWord === word) {
        return true;
    } else return false;
}

/* 
  Add your pseudocode here
  this if statement below will be in the for loop
  create if statement in function
  if statement should check if the string is a palindrome 
  return true if it is, false if it isn't

  to check if the word is a palindrome i need to loop through it 
  once i loop through I need to to reverse loop it 
  after reverse looped, check if they match

  store the reverse word in a variable

  the if statement should check if reverse loop and normal loop match
  if they match it returns true, which means its a palindrome
  if they dont match it returns false, which means its not a palindrome
*/

/*
  Add written explanation of your solution here
  I realized my pseudocode had flaws but I was able to fix them on the fly
  As for the solution, I first created an empty string variable that would hold
  the reversed word. 
  I needed this variable so I can have the normal word be compared to something in the if statement
  Then I made a simple if statement that compared to the reversed word and returned true if they matched
  and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log('Expecting: true');
    console.log('=>', isPalindrome('racecar'));

    console.log('');

    console.log('Expecting: false');
    console.log('=>', isPalindrome('robot'));
}

module.exports = isPalindrome;

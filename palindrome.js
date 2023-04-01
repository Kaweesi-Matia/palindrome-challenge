function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');

  // Compare the original and reversed strings
  return cleanStr === reversedStr;
}

const myStr = 'racecar';
if (isPalindrome(myStr)) {
  console.log(`${myStr} is a palindrome!`);
} else {
  console.log(`${myStr} is not a palindrome.`);
}

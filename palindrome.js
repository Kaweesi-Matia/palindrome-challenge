function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Compare the string to its reverse
  return str === str.split('').reverse().join('');
}
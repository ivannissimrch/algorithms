// Write a recursive function reverseString(str) that returns the reversed version of a string.

function reverseString(someString) {
  if (someString.length < 1) {
    return someString;
  }

  return reverseString(someString.slice(1)) + someString[0];
}

console.log(reverseString("Cat"));

// solution 1 using js methods
function reverseString(word: string) {
  let reverseWord = word.split("").reverse().join("");
  return reverseWord;
}

// solution2 using a for of loop
function reverseString2(word: string) {
  let reverseWord = "";

  for (const char of word) {
    reverseWord = char + reverseWord;
  }

  return reverseWord;
}

const result = reverseString2("strops");
console.log(result);

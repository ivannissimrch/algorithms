function reverseString(word) {
  // solution 1 easiest
  // const reversedWord = word.split("").reverse().join("");
  // return reversedWord;

  //solution2
  let reversedWord = "";
  // The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
  //  Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set,
  // NodeList (and other DOM collections),
  //  as well as the arguments object, generators produced by generator functions, and user-defined iterables.
  for (const char of word) {
    reversedWord = char + reversedWord;
  }
  return reversedWord;
}

// Turn "stressed" into "desserts".
console.log(reverseString("stressed"));

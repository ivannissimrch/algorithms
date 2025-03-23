function frequencyAnalysis(lettersSequence) {
  const letterCount = {};
  // console.log(letterCount[char]);
  for (const char of lettersSequence) {
    !letterCount[char] ? (letterCount[char] = 1) : letterCount[char]++;
  }
  return letterCount;
}

console.log(frequencyAnalysis("abca")); // => {a: 2, b: 1, c: 1}

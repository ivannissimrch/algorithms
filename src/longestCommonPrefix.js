function longestCommonPrefix(strs) {
  let longestPrefix = "";
  const firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    console.log("first word i", firstWord[i]);
    for (let j = 1; j < strs.length; j++) {
      console.log("str j", strs[j]);
      const currentWord = strs[j];
      if (currentWord[i] !== firstWord[i]) {
        return longestPrefix;
      }
    }
    longestPrefix += firstWord[i];
    console.log("logest prefix", longestPrefix);
  }
  return longestPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

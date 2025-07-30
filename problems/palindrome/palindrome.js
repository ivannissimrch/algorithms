const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function isPalindrome(s) {
  const cleanedS = s.split("").filter((char) => letters.includes(char));
  console.log(cleanedS);
  const reverseS = cleanedS.reverse().join("");
  console.log(reverseS);

  console.log(cleanedS.join(""));

  const originalSCleaned = s
    .split("")
    .filter((char) => letters.includes(char))
    .join("");

  return reverseS === originalSCleaned;
}

console.log(isPalindrome("race a car"));

let letters = [
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
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

function leetTranslator(message) {
  const arrayFromMessage = message.split("");

  const result = arrayFromMessage.map((char) => {
    const index = letters.indexOf(char);
    return leetChars[index];
  });

  return result.join("");

  // const mapCharts = {};

  // letters.forEach((char, idx) => {
  //   mapCharts[char] = leetChars[idx];
  // });

  // console.log(mapCharts);
}

console.log(leetTranslator("fullstack"));

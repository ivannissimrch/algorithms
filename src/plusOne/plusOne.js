const digits1 = [1, 2, 3];
const digits2 = [4, 3, 2, 1];
const digits3 = [9];

const plusOne = function (digits) {
  let numberFromArray = +digits.join("");
  console.log(typeof numberFromArray);
  numberFromArray++;
  return numberFromArray
    .toString()
    .split("")
    .map((char) => +char);
};

console.log(plusOne(digits1));

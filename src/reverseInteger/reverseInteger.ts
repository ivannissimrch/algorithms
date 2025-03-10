export function reverseInteger(integer: number) {
  let reversedNumber = 0;
  if (integer === 0) {
    return reversedNumber;
  }

  //todo

  // if (integer < 0) {
  //   return 1;
  // }

  if (integer > 0) {
    return +integer.toString().split("").reverse().join("");
  }
}

// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

console.log(reverseInteger(51));

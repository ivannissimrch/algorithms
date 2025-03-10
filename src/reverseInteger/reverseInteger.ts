export function reverseInteger(integer: number) {
  let reversedNumber = 0;
  if (integer === 0) {
    return reversedNumber;
  }

  if (integer < 0) {
    const positiveInteger = integer * -1;
    const reversedInteger = +positiveInteger
      .toString()
      .split("")
      .reverse()
      .join("");
    const result = reversedInteger * -1;
    return result;
  }

  if (integer > 0) {
    return +integer.toString().split("").reverse().join("");
  }
}

// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

console.log(reverseInteger(-5));

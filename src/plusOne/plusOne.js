const digits1 = [1, 2, 3];
const digits2 = [4, 3, 2, 1];
const digits3 = [9];

const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([9, 9, 9]));

// if (i === digits.length - 1 && digits[i] + addOne <= 9) {
//   digits[i] = digits[i] + addOne;
//   return digits;
// }
// if (i === digits.length - 1 && digits[i] + addOne === 10 && i !== 0) {
//   digits[i] = 0;
//   carryOver = 1;
//   continue;
// }

// if ((carryOver = 1 && digits[i] + addOne <= 9)) {
//   digits[i] = digits[i] + 1;
//   return digits;
// }

// if ((carryOver = 1 && digits[i] + addOne === 10)) {
//   digits[i] = 0;
//   carryOver = 1;

//   if (i === 0) {
//     digits.unshift(1);
//     return digits;
//   }
//   console.log(i);
//   continue;
// }

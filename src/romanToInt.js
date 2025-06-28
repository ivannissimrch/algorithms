function romanToInt(s) {
  let romanNumber = 0;
  const romanToIntObject = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const currentRomanNumber = s[i];
    const nextRomanNumber = s[i + 1];
    let currentValue = romanToIntObject[s[i]];

    if (
      romanToIntObject[nextRomanNumber] > romanToIntObject[currentRomanNumber]
    ) {
      romanNumber +=
        romanToIntObject[nextRomanNumber] -
        romanToIntObject[currentRomanNumber];
      i++;
    } else {
      romanNumber += currentValue;
    }
  }

  return romanNumber;
}

console.log(romanToInt("IV"));
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

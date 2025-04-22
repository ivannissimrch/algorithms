const threeSum = function (numbersArray) {
  console.log("strings num", numbersArray);
  const sortedNumbers = numbersArray.sort((a, b) => a - b);

  for (let i = 0; i < sortedNumbers.length - 2; i++) {
    const j = i + 1;
    const k = sortedNumbers.length - 1;
    if (sortedNumbers[i] + sortedNumbers[j] + sortedNumbers[k] === 0) {
      return [sortedNumbers[i], sortedNumbers[j], sortedNumbers[k]];
    } else {
      j = i + 2;
      if (sortedNumbers[i] + sortedNumbers[j] + sortedNumbers[k] === 0) {
        return [sortedNumbers[i], sortedNumbers[j], sortedNumbers[k]];
      } else {
        j = i + 3;
        if (sortedNumbers[i] + sortedNumbers[j] + sortedNumbers[k] === 0) {
          return [sortedNumbers[i], sortedNumbers[j], sortedNumbers[k]];
        }
      }
    }
  }
};
const nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);

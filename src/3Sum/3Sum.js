const threeSum = function (numbersArray) {
  const sortedNumbers = numbersArray.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < sortedNumbers.length - 2; i++) {
    if (i > 0 && sortedNumbers[i] === sortedNumbers[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = sortedNumbers.length - 1;

    while (j < k) {
      console.log("sorted numbrs", sortedNumbers);
      console.log(
        "current i, j, k",
        sortedNumbers[i],
        sortedNumbers[j],
        sortedNumbers[k]
      );

      const sum = sortedNumbers[i] + sortedNumbers[j] + sortedNumbers[k];
      console.log("sum", sum);
      if (sum === 0) {
        results.push([sortedNumbers[i], sortedNumbers[j], sortedNumbers[k]]);
        j++;
        k--;

        console.log("current ");
        while (j < k && sortedNumbers[j] === sortedNumbers[j - 1]) {
          j++;
        }

        while (j < k && sortedNumbers[k] === sortedNumbers[k + 1]) {
          k--;
        }
      }
      if (sum < 0) {
        j++;
      }
      if (sum > 0) {
        k--;
      }
    }
  }
  return results;
};
const nums = [-1, 0, 1, -1, 2, -1, -4];
console.log(threeSum(nums));

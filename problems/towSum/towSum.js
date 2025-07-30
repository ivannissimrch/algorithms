/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const sortedArray = nums.map((num, idx) => num).sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex < rightIndex) {
    const sum = sortedArray[leftIndex] + sortedArray[rightIndex];
    if (sum === target) {
      const result = [];
      nums.forEach((num, idx) => {
        if (num === sortedArray[leftIndex] || num === sortedArray[rightIndex]) {
          result.push(idx);
        }
      });

      return result;
    } else if (sum > target) {
      rightIndex--;
    } else if (sum < target) {
      leftIndex++;
    }
  }
};

const numbers = [3, 3];
console.log(twoSum(numbers, 6));

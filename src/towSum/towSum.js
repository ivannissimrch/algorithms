/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const sortedArray = nums.map((num, idx) => num);
  console.log(sortedArray);
  sortedArray.sort((a, b) => a - b);
  console.log(sortedArray);

  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;
  while (leftIndex < rightIndex) {
    console.log("sorted array", sortedArray);
    console.log("original array", nums);
    console.log(
      "left ad right index",
      sortedArray[leftIndex],
      sortedArray[rightIndex]
    );

    const sum = sortedArray[leftIndex] + sortedArray[rightIndex];

    if (sum === target) {
      const result = [];
      nums.forEach((num, idx) => {
        console.log("idx", idx);
        if (num === sortedArray[leftIndex] || num === sortedArray[rightIndex]) {
          result.push(idx);
        }
      });
      console.log("result", result);

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

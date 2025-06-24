function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
    } else {
      k++;
    }
  }

  nums.sort((a, b) => {
    if (a === "_") {
      return -2;
    } else {
      return 2;
    }
  });

  console.log(nums);

  return k;
}

console.log(removeElement([3, 2, 2, 3], 3));

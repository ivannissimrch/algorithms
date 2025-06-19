function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = null;
    }
  }

  const k = nums.filter((num) => num !== null);

  return k.length;
}

console.log(removeElement([3, 2, 2, 3], 3));

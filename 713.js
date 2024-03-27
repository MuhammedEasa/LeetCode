var numSubarrayProductLessThanK = function (nums, k) {
  let count = 0;
  if (k <= 1) return count;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum < k) {
      count++;
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum = sum * nums[j];
      if (sum < k) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));

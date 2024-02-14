var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      const lengthh = String(nums[i]).length;
      if (lengthh % 2 === 0) {
          count++;
      }
  }
  return count;
};

const nums = [12, 345, 2, 6, 7896];
const result = findNumbers(nums);

console.log(result);

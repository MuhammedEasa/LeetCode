var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (target === nums[middle]) {
            return middle
        }
        if (target < nums[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
};

let nums = [-1,0,3,5,9,12], target = 9

console.log(search(nums,target));
var pivotArray = function(nums, pivot) {
    let left = [];
    let right = [];
    let equal = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else if (nums[i] > pivot) {
            right.push(nums[i]);
        } else {
            equal.push(nums[i]);
        }
    }

    return [...left, ...equal, ...right];
};
let nums = [9,12,5,10,14,3,10], pivot = 10
console.log(pivotArray(nums,pivot));
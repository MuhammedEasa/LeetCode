var removeElement = function(nums, val) {
    let i = 0; 

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
};
console.log(removeElement([1,2,3,4,3,2,1,2],2));
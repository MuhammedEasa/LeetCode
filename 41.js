var firstMissingPositive = function (nums) {
    // nums.sort((a, b) => a - b);
    // let value = 1
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == value) {
    //         value++
    //     }
    // }
    // return value;

    let set = new Set(nums)
    let value = 1;
    while (set.has(value)) {
        value++
    }
    return value
};

console.log(firstMissingPositive([1,2,0]));
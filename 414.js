var thirdMax = function(nums) {
    nums = nums.sort((a, b) => b - a); 
    let current;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== current) {
            current = nums[i];
            count++;
        }

        if (count === 3) {
            return current;
        }
    }
    
    return nums[0];
};

let nums = [3,2,1]
console.log(thirdMax(nums));
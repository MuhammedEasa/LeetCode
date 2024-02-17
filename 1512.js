function numIdenticalPairs(nums) {
    let count = 0;
    let occurrences = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (occurrences[num]) {
            count += occurrences[num];
            occurrences[num]++;
        } else {
            occurrences[num] = 1;
        }
    }

    return count;
}
let nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));
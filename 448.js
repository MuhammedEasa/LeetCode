var findDisappearedNumbers = function(nums) {
    let arr = new Set(nums);
    let arr1 = Array.from({ length: nums.length }, (_, index) => index + 1);
    let arr2 = new Set(arr1);

    // Find the elements in arr2 that are not in arr
    let difference = new Set([...arr2].filter(x => !arr.has(x)));

    console.log("Original Array:", arr);
    console.log("Range Array:", arr1);
    console.log("Range Set:", arr2);
    console.log("Difference Set:", difference);

    // If you want to convert the difference Set back to an array, you can use Array.from
    let resultArray = Array.from(difference);
    console.log("Result Array:", resultArray);
    return resultArray;
};

nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));

var findIntersectionValues = function (nums1, nums2) {
    let value = []
    let count = 0
    let count1 = 0

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            count++;
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            count1++;
        }
    }
    value.push(count, count1)
    return value
};

let nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
console.log(findIntersectionValues(nums1,nums2));
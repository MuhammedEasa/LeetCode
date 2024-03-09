var getCommon = function(nums1, nums2) {
    const set = new Set(nums1)
    for(num of nums2){
       if(set.has(num)){
        return num
       }
}
    return null
};
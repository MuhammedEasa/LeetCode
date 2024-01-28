var frequencySort = function(nums) {
    let hash1 = {}
 for( let i of nums){
     hash1[i] = (hash1[i]||0)+1
 }
 console.log(hash1);
 nums.sort((a,b)=>hash1[a]-hash1[b]||b-a)
        console.log(nums);
};

nums = [1,1,2,2,2,3];
console.log(frequencySort(nums));
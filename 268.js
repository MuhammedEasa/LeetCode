var missingNumber = function(nums) {
    let missingValue = 0;
    nums.sort((a,b)=>a-b);
    let Unique = new Set(nums)
    for(let i= 0;i<=nums.length;i++){
        if(Unique.has(i)){
            continue;
        }else{
            missingValue = i
        }
    }
    return missingValue;
};

const arr = [3,0,1]
console.log(missingNumber(arr));
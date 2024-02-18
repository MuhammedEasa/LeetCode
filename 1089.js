var duplicateZeros = function(arr) {
    let zeroCount = 0;
    const n = arr.length;

   
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        if (i + zeroCount < n) {
            arr[i + zeroCount] = arr[i];
        }
        if (arr[i] === 0) {
            zeroCount--;

            if (i + zeroCount < n) {
                arr[i + zeroCount] = 0;
            }
        }
    }
};


let arr = [1,0,2,3,0,4,5,0]
console.log(duplicateZeros(arr));
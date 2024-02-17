function replaceElements(arr) {
    const n = arr.length;
    let maxRight = -1;

    for (let i = n - 1; i >= 0; i--) {
        const currentElement = arr[i];
        arr[i] = maxRight;
        maxRight = Math.max(maxRight, currentElement);
    }

    return arr;
}

let arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));
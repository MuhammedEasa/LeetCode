var nextGreatestLetter = function (letters, target) {
    // let values = new Set(letters)
    // for (let keys of values) {
    //     if (keys > target) {
    //         return keys
    //     }
    // }
    // return letters[0]
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            return letters[i]
        }
    }
    return letters[0];
};

let letters = ["c","f","j"], target = "a"
console.log(nextGreatestLetter(letters,target));
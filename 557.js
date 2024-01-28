var reverseWords = function(s) {
    let a = []
    let arr = s.split(" ");
    console.log(arr);
    for(let i =0;i<arr.length;i++){
       a.push(arr[i].split("").reverse().join("")) 
    }
    console.log(a.join(""));
    return a;
};
s = "Let's take LeetCode contest"
reverseWords(s)
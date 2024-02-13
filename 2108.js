var firstPalindrome = function(words) {
    for(let i =0;i<words.length;i++){
        if(palindrome(words[i])){
            return words[i]
        }
    }
    function palindrome(check){
        return check === check.split("").reverse().join("")
    }
    return ""
};


let words = ["abc","car","ada","racecar","cool"];
console.log(firstPalindrome(words));
var isSubsequence = function (s, t) {
    let count = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[count] === t[i]) {
            count++;
        }
    }
    return s.length === count
};

s = "abc", t = "ahbgdc"
console.log(isSubsequence(s,t));
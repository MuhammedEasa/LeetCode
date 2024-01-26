var reverseWords = function(s) {
    let s1 = s.trim().split(/\s+/).reverse().join(" ")
    return s1;
    };



    s = "the sky is blue"
    console.log(reverseWords(s));
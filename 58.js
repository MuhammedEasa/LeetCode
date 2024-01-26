var lengthOfLastWord = function(s) {
   let s1= s.trim()
  
    let arr = s1.split(" ")
    
    let a = arr.pop()
    return a.length
};


console.log(lengthOfLastWord(" Hello World    "));
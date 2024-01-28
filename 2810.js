var finalString = function(s) {
   let arr = []

    for(let i = 0;i<s.length;i++){
        if(s[i]=='i'){
          arr.reverse()
        }else{
            arr.push(s[i])
        }
    }
    console.log(arr.join(""));
};
s = "string"
console.log(finalString(s));
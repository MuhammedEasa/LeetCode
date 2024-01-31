var restoreString = function (s, indices) {
    let result = [];
  
    for (let i = 0; i < s.length; i++) {
      result[indices[i]] = s[i];
    }
    
    let string = result.join("");
    return string;
  };
  
  let s = "codeleet";
  let indices = [4, 5, 6, 7, 0, 2, 1, 3];
  
  console.log(restoreString(s, indices));
  
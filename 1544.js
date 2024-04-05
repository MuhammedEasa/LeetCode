var makeGood = function (s) {
  let stack = [];
  let i = 0;
  while (i < s.length) {
    if (
      stack.length &&
      stack[stack.length - 1] !== s[i] &&
      stack[stack.length - 1].toLowerCase() === s[i].toLowerCase()
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
      
    }
    i++;
  }
  return stack.join("");
};
let s = "leEeetcode"
let s1 = "abBAcC"
let s2 = "s"
console.log(makeGood(s));
console.log(makeGood(s1));
console.log(makeGood(s2));
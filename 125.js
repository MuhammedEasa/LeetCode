var isPalindrome = function(s) {
    let alphanumericString = '';
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i].toLowerCase();
      
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            alphanumericString += char;
        }
    }

    return alphanumericString === alphanumericString.split('').reverse().join('');
};

// var isPalindrome = function(s) {
//     let b = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//  return b === b.split('').reverse().join('')
// };
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));
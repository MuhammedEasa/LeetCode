var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const charMappingMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const original = s.charAt(i);
        const replacement = t.charAt(i);

        if (!charMappingMap.has(original)) {
            for (let [key, value] of charMappingMap.entries()) {
                if (value === replacement) {
                    return false;
                }
            }
            charMappingMap.set(original, replacement);
        } else {
            const mappedCharacter = charMappingMap.get(original);
            if (mappedCharacter !== replacement) {
                return false;
            }
        }
    }

    return true;
};

let s = "egg", t = "add"
let s1 = "foo", t1 = "bar"
let s2 = "paper", t2 = "title"

console.log(isIsomorphic(s,t));
console.log(isIsomorphic(s1,t1));
console.log(isIsomorphic(s2,t2));
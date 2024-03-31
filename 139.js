var wordBreak = function (s, wordDict) {
    let visited = new Set()
    let set = new Set(wordDict)
    let queue = [0]

    while (queue.length) {
        let current = queue.shift()
        if (!visited.has(current)) {
            for (let i = current + 1; i <= s.length; i++) {
                if (set.has(s.slice(current, i))) {
                    if (i === s.length) {
                        return true;
                    }
                    queue.push(i)
                }
            }
            visited.add(current)
        }
    }
    return false
};

let s = "leetcode", wordDict = ["leet","code"]
let s2 = "applepenapple", wordDict2 = ["apple","pen"]
let s3= "catsandog", wordDict3 = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s,wordDict));
console.log(wordBreak(s2,wordDict2));
console.log(wordBreak(s3,wordDict3));
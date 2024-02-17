var mostWordsFound = function(sentences) {
    let max = 0;

  for (let sentence of sentences) {
      const words = sentence.split(' ');
      max = Math.max(max, words.length);
  }

  return max;
};
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentences));
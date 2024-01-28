function calculateDistances(s, c) {
    const result = [];
  const indexes = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      indexes.push(i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      result.push(0);
    } else {
      const distancesToIndexes = indexes.map(index => Math.abs(i - index));
      const minDistance = Math.min(...distancesToIndexes);
      result.push(minDistance);
    }
  }

  return result;
  }
  
  const s = "loveleetcode";
  const c = "e";
  const output = calculateDistances(s, c);
  console.log(output);
  
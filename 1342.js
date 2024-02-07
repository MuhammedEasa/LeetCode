function numberOfSteps(num, count = 0) {
    // Base case to stop recursion
    if (num === 0) {
      return count;
    }
  
    // If the number is even, divide it by 2
    if (num % 2 === 0) {
      return numberOfSteps(num / 2, count + 1);
    } else {
      // If the number is odd, subtract 1
      return numberOfSteps(num - 1, count + 1);
    }
  }
  
  // Example usage
  const result = numberOfSteps(14);
  console.log(result);
  
function decompose(n) {
  function decomposeHelper(target, num) {
      if (target === 0) return [num];

      for (let i = num - 1; i > 0; i--) {
          const remainder = target - (i**2)
          if (remainder >= 0) {
              const result = decomposeHelper(remainder, i);
              if (result) {
                  result.push(num);
                  return result;
              }
          }
      }
      return null;
  }

  const squared = n * n;
  const result = decomposeHelper(squared, n);

  if (result && result.length > 1) {
      result.pop(); // Remove the last element
      return result;
  }

  return null;
}

// Test cases

console.log(decompose(50)); // Output: [1, 3, 5, 8, 49]

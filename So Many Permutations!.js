function permutations(str) {
  let res = new Set(); // Create a Set to store unique permutations


  function backtrack(path, used) {
    if (path.length === str.length) { // Base case: If the path length equals the input string length
      res.add(path.join('')); // Add the current permutation (as a joined string) to the Set
      return;
    }

    for (let i = 0; i < str.length; i++) { // Loop through the remaining characters
      if (used[i]) continue; // Skip if the character is already used in the permutation

      path.push(str[i]); // Push the character to the current permutation path
      used[i] = true; // Mark the character as used

      backtrack(path, used); // Recursively call backtrack with updated parameters

      path.pop(); // Backtrack: Remove the last character from the current path
      used[i] = false; // Mark the character as unused to explore other possibilities
    }
  }

  backtrack([], Array(str.length).fill(false)); // Start the backtracking process
  return [...res]; // Convert the Set back to an array for output
}

console.log(permutations("abc")); // Example usage: Get unique permutations of "aabc"

function duplicateEncode(word){
  const charCount = new Map();
  const result = [];

  // Count occurrences of each character, ignoring case
  for (const char of word.toLowerCase()) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  // Construct the new string based on character counts
  for (const char of word.toLowerCase()) {
    if (charCount.get(char) === 1) {
      result.push('(');
    } else {
      result.push(')');
    }
  }

  return result.join('');
}

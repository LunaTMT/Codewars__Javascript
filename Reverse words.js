function reverseWords(str) {
  // Split the sentence into words
  const words = str.split(' ');

  // Reverse each word
  const res = words.map(word => word.split('').reverse().join(''));

  return res.join(' ');
}
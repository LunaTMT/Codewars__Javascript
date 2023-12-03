function topThreeWords(text) {
  text = text.replace(/[\\/#.]/g, '').toLowerCase();
  text = text.match(/\b[a-zA-Z']+\b/g);
  if (!text) return []
  let count = text.reduce((count, e) => { count[e] = (count[e] || 0) + 1; return count;}, {});
  const sortedKeyValues = Object.entries(count).sort((a, b) => b[1] - a[1]);
  return sortedKeyValues.slice(0, 3).map(pair => pair[0]);
}
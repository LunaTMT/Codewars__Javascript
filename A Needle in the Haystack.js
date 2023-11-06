function findNeedle(haystack) {
  const index = haystack.indexOf("needle")
  return index? `found the needle at position ${index}` : "Your function didn't return anything";
}/*  */
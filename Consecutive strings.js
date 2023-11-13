function longestConsec(arr, k) {
   if (arr.length == 0 || k < 0 || k > arr.length) return ""  
   arr = arr.map((_, i) => arr.slice(i, i+k).join(''));
   return arr.reduce((longest, str) => { return str.length > longest.length ? str : longest; });
 }
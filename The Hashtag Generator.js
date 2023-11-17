function generateHashtag (str) {
   str = str.replace(/\b\w/g, match => match.toUpperCase()).replace(/\s+/g, '');
   return !str || str.length >= 140? false: "#" + str
 } 
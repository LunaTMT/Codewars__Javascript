function firstNonRepeatingLetter(s) {
   let s_lower = s.toLowerCase()
   let Count = {}
   
   for (let char of s_lower){
     Count[char] = (Count[char] || 0) + 1;
   }
   
   for (let i=0; i < s.length; i++){
     let char = s[i];
     if (Count[s_lower[i]] === 1) return char;
   }
   
   return ""
 }
function rot13(str) {
   return [...str].map(e => {
     if (/[A-Za-z]/.test(e)) {
       let shift = e.charCodeAt(0) <= 90 ? 65 : 97; // Check if uppercase or lowercase
       return String.fromCharCode((e.charCodeAt(0) - shift + 13) % 26 + shift);
     }
     return e;
   }).join('');
 }
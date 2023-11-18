function orderWeight(str) {
   const calculateWeight = num => num.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
   return str.split(' ').sort((a, b) => {
     const weightA = calculateWeight(a);
     const weightB = calculateWeight(b);
     return weightA - weightB || a.localeCompare(b);
   }).join(' ');
 }
 
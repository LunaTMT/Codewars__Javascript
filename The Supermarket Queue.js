function queueTime(arr, n) {
   let tills = Array(n).fill(0);
 
   arr.forEach(e => {
     let minIndex = tills.indexOf(Math.min(...tills));
     tills[minIndex] += e;
   });
   
   return Math.max(...tills);
 }
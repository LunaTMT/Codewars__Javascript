var maxSequence = function(arr){
   let currentSum = 0;
   let maxSum = 0;
   
   arr.forEach(function(element) {
     if (currentSum < 0) {
       currentSum = 0;
     }
     currentSum += element;
     maxSum = Math.max(maxSum, currentSum);
   });
   
   return maxSum
 } 
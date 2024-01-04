
// Naive Method - This requires O(n^3)
function matrixMultiplication(a, b){
  
    let res = [];
    
    for (let i=0; i < a.length; i++){
      res[i] = [];
      for (let j=0; j < b[0].length; j++){
        let sum = 0;
        for (let k=0; k < b.length; k++){
          sum += a[i][k] * b[k][j];
        }
        res[i][j] = sum
      }
    }
    return res;
  }


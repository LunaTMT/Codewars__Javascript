
  function snail(matrix){
    // Base case
    if (matrix.length === 1){
      return matrix[0];
    }
    if (matrix[0].length === 1){
      return matrix.map(row => row[0]);
    }
    
    //Recursive case
    const top_row = matrix[0];
    const transposed = rotate_matrix(matrix.slice(1))
    const sub_result = snail(transposed);
    return top_row.concat(sub_result);
  }
  
  function rotate_matrix(matrix){
    const transposed = Array.from({ length: matrix[0].length }, () => Array(matrix.length));
    const nRows = matrix.length
    const nCols = matrix[0].length
    
    for (let i=0; i < nRows; i++){
      for (let j=0; j < nCols; j++){
        transposed[nCols-1-j][i] = matrix[i][j];
      }
    }
    return transposed; 
  }

  snail([[1, 2, 3],
         [4, 5, 6], 
         [7, 8, 9]])
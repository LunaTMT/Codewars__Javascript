function snail(matrix) {
    if (matrix.length === 1) {
      return matrix[0];
    }
  
    if (matrix[0].length === 1) {
      return matrix.map(row => row[0]);
    }
  
    // Extract the top row
    const topRow = matrix[0];
  
    // Rotate the submatrix counterclockwise
    const rotatedMatrix = rotateMatrixCounterclockwise(matrix.slice(1));
  
    // Recursively call the snail sort on the rotated submatrix
    const subResult = snail(rotatedMatrix);
  
    // Combine the top row and the result from the submatrix
    return topRow.concat(subResult);
  }
  
  function rotateMatrixCounterclockwise(matrix) {
    if (matrix.length === 0) {
      return matrix;
    }
  
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    // Create an empty rotated matrix
    const rotatedMatrix = Array.from({ length: numCols }, () => Array(numRows));
  
    // Populate the rotated matrix
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        rotatedMatrix[numCols - j - 1][i] = matrix[i][j];
      }
    }
  
    return rotatedMatrix;
  }

  snail([[1, 2, 3],
         [4, 5, 6], 
         [7, 8, 9]])
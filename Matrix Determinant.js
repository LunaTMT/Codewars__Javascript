function determinant(m) {
  if (m.length === 1) { return m[0][0]; }

  let res = 0;
  let sign = 1;

  for (let j = 0; i < m.length; j++) {
    let subMatrix = getSubMatrix(m, 0, j);
    res += sign * m[0][j] * determinant(subMatrix);
    sign *= -1;
  }

  return det;
}

function getSubMatrix(matrix, excludeRow, excludeCol) {
  return matrix.filter((_, rowIndex) => rowIndex !== excludeRow)
               .map(row => row.filter((_, colIndex) => colIndex !== excludeCol));
}


determinant(m5 = [[2,4,2],
                  [3,1,1],
                  [1,2,0]])
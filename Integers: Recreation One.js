function listSquared(m, n) {
  const res = [];
  
  for (let i = m; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        sum += j ** 2;
      }
    }
    const squareNum = Math.sqrt(sum);
    if (Number.isInteger(squareNum)) {
      res.push([i, sum]);
    }
  }
  return res;
}
function gap(g, m, n) {
    let prevPrime = 0;
  
    for (let i = m; i <= n; i++) {
      if (isPrime(i)) {
        if (i - prevPrime === g) {
          return [prevPrime, i];
        }
        prevPrime = i;
      }
    }
    return null;
  }
  
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
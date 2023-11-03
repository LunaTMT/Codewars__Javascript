function productFib(prod){
    const fib = [0, 1];
    let n = fib.length - 1;
   
    while (fib[n - 1] * fib[n] < prod) {
      const nextFib = fib[n - 1] + fib[n];
      fib.push(nextFib);
      n++;
    }
    return fib[n - 1] * fib[n] == prod? [fib[n - 1], fib[n], true]: [fib[n - 1], fib[n], false]
  }
function primeFactors(n){
  let sqrt = Math.sqrt(n);
  let res = {}

  while (n%2 == 0){
    res[2] = (res[2] || 0) + 1;
    n/= 2
  }


  for (let i=3; i < sqrt; i+=2){
    while(n%i === 0){
      n /= i
      res[i] = (res[i] || 0) + 1
      sqrt = Math.sqrt(n);
    }
  }
  
  if (n > 1) {
      res[n] = (res[n] || 0) + 1;
  }

  res = Object.keys(res).reduce((str, e) => {
  str += res[e] > 1? `(${e}**${res[e]})` : `(${e})`
  return str;
  }, "")
 
  return res
}
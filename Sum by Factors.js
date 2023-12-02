function sumOfDivided(arr) {
  let map = {};

  arr.forEach(num => {
    let factors = getPrimeFactors(Math.abs(num));
    factors.forEach(factor => {
      if (!map[factor]) {
        map[factor] = 0;
      }
      map[factor] += num;
    });
  });

  let res = Object.keys(map)
    .sort((a, b) => a - b)
    .map(key => [parseInt(key), map[key]]);

  return res;
}            
               
function getPrimeFactors(e){
    let factors = new Set();
    if (e < 2) { return factors}
    
    
    while (e % 2 === 0){
      e /= 2;
      factors.add(2);
    }
    
    for (let i=3; i <= Math.sqrt(e); i++){
      while (e % i === 0){
        factors.add(i);
        e /= i;
      }
    }
    
    if (e > 2) { factors.add(e); }

    return factors;
  }
 
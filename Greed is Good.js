function score( dice ) {
  const Counter = dice.reduce((Counter, e) => {
    Counter[e]? Counter[e]++ : (Counter[e] = 1); 
    return Counter;
    }, {});
  
  let res = 0;
  Object.keys(Counter).forEach(num => {
    const freq = Counter[num];

    if (num === '1') {
      res += Math.floor(freq / 3) * 1000 + (freq % 3) * 100;
    } else if (num === '5') {
      res += Math.floor(freq / 3) * 500 + (freq % 3) * 50;
    } else {
      res += Math.floor(freq / 3) * (parseInt(num) * 100);
    }
  });
  return res
}
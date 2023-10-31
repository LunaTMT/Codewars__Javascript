const solution = (n) => Array.from({ length: n }, (_, i) => i).reduce((acc, e) => {return e % 3 === 0 || e % 5 === 0 ? acc + e : acc;}, 0);


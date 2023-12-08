Math.round = function(n) {
    const z = Math.trunc(n);
    const r = n - z;
    return r? r >= 0.5? z+1 : z : n
  };
  
  Math.ceil = function(n) {
    const z = Math.trunc(n);
    const r = n - z;
    return r? z+1 : z
  };
  
  Math.floor = function(n) {
    return Math.trunc(n);
  };
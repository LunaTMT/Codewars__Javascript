function memoize(func){
  let cache = {};
  
  return function(...args){
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = func.apply(this, args);
      }
    return cache[key];
    };
}

function factorial(n) {
  function recursion(x) {
    if (x === 1 || x === 0) {
      return 1;
    }
    return x * recursion(x - 1);
  }
  
  const memoizedRecursion = memoize(recursion);

  return memoizedRecursion(n).toString();
}
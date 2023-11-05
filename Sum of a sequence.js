const sequenceSum = (start, end, step) => {
  const n = (Math.floor((end-start)/step) + 1) 
  return ((start > end) || n <= 0)? 0 : (n/2) * (2 * start + (n - 1) * step)
};
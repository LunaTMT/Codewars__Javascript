var countBits = function(n) {
  n = n.toString(2)
  return n.split('').reduce((acc, e) => acc + (e === '1' ? 1 : 0), 0);
}
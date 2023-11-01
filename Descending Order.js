function descendingOrder(n){
  n = String(n).split('').map(Number);
  n.sort((a, b) => b - a);
  return parseInt(n.join(''))

  // better
  // return parseInt(String(n).split('').sort().reverse().join(''))
}
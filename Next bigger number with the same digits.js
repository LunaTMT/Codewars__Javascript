function nextBigger(n){
  n = [...n.toString()]
  
  let pivot = -1;

  for (let i = n.length - 2; i >= 0; i--) {
    if (n[i] < n[i + 1]) {
      pivot = i;
      break;
    }
  }
  
  if (pivot === -1) { return -1 }
  
  let RMS = [Infinity, Infinity];

  for (let i = pivot + 1; i < n.length; i++) {
    if (n[i] > n[pivot] && n[i] < RMS[0]) {
      RMS = [n[i], i]; 
    }
  }
  
  [n[pivot], n[RMS[1]]] = [n[RMS[1]], n[pivot]];
  return parseInt(n.slice(0, pivot+1).concat(n.slice(pivot+1).sort((a,b) => a-b)).join(''))
}
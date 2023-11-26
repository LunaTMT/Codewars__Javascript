function perimeter(n) {
  let fb = [0, 1] 
  
  for (let i=2; i<=n+1; i++){
    fb[i] = fb[i-2] + fb[i-1]
  }
  return 4* fb.reduce((acc, e) => acc+e)
}   
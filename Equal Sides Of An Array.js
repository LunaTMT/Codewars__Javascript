function findEvenIndex(arr)
{
  l = 0 
  r = arr.reduce((acc, e) => acc + e, 0) - arr[0];
  
  for (let i=1; i < arr.length; i++){
    if (l == r){ return i }
    else {
      l += arr[i-1]
      r -= arr[i]
    }
  }
  return -1
}

findEvenIndex( [10,-80,10,10,15,35,20] )
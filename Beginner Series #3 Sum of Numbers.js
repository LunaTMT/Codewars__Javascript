function getSum(a, b)
{
  if (a == b){return a}
  
  start = Math.min(a, b)
  end = Math.max(a, b)
  
  res = 0
  for (let i=start; i<=end; i++){
    res += i
  }
  
  return res
}
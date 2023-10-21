function SeriesSum(n)
{
  console.log("n = ", n)
  if (n == 1){
    return "1.00"
  }
  else { 
    return (1 + ((n-1)/2 *(2*(1/4) + (n-2)*(3/28) ))) .toFixed(2)
  }
}

SeriesSum(3)
function rentalCarCost(d) {
  let res = 0;
  if (d >= 7){
    res -= 50;
  } else if (d >= 3){
    res -= 20;
  }
  return res + (d*40)
}
function century(year) {
    const quotient = Math.floor(year / 100);
    const remainder = year % 100;
    if (remainder > 0){
        return quotient+1
    } 
    return quotient
  }

  // or simply - const century = year => Math.ceil(year/100)
century(1701)
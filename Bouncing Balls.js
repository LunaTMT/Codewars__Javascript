function bouncingBall(h,  bounce,  window) {
    if (h < 0 || bounce <= 0 || bounce >= 1 || window > h){
      return -1
    }
    
    i = 0
    while (h > window){
      h *= bounce
      i += 1
    }
    return (i*2) -1
  }
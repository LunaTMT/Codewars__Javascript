function digitalRoot(n) {
    n = n.toString()
    
    while (n.length > 1){
      n = n.split('').map(Number).reduce((acc, e) => acc + e, 0).toString();
    }
    return parseInt(n)
  }
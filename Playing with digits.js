function digPow(n, p){
    console.log(n, p)
    const int = n.toString();
    
    const sum = Array.from(int).reduce((sum, digit) => {
      return sum + Math.pow(parseInt(digit), p++);
      
    }, 0);
    
    return (sum % n === 0)? sum/n : -1
  
  }
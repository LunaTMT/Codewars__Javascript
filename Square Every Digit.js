function squareDigits(num){
   return parseInt(Array.from(String(num), Number).map(e => {return e**2}).join(''))
}
function persistence(num) {
    var i = 0;
    while (num.toString().length > 1){
      num = Array.from(num.toString(), char => parseInt(char)).reduce((acc, e) => { return acc * e; }, 1);
      i += 1;
    }
   return i
 }
 
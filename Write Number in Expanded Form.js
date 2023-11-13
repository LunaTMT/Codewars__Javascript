function expandedForm(num) {
   let units = 1;
   let res = []
   while (num > 0){
      let digit = num%10;
      if (digit) res.push((digit * units).toString())
      num = Math.floor(num / 10)
      units *= 10
   }
   return res.reverse().join(' + ')
 }

 expandedForm(70304)
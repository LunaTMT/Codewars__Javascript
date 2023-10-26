function wave(str){
  str = str.toLowerCase().split('');
  var temp = str.slice();
  const n = str.length ;
  const res = [];

  for (let i=0; i<n; i++){
    if (!/\s/.test(str[i])){
        temp = str.slice();
        temp[i] = temp[i].toUpperCase();
        res.push(temp.join(''));
    }
   }
  return res
}

wave("H ello")
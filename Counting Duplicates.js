function duplicateCount(str){
  let map = str.toLowerCase().split('').reduce((arr, e) => {
    arr[e] = (arr[e] || 0) + 1;
    return arr;
  }, {});
  
  return Object.values(map).reduce((acc, val) => val > 1 ? acc + 1 : acc, 0);
}

function longestSlideDown(arr) {
  return arr.reduceRight((last, current) => {
    console.log(current);
    return current.map((v, i) => v + Math.max(last[i], last[i + 1]));
  })[0];
}

//My sol
function longestSlideDown (arr) {
  for (let i = arr.length - 2; i >= 0; i--){
    for (let j = 0; j < arr[i].length; j++){
      const left_child = arr[i+1][j]
      const right_child = arr[i+1][j+1]
      arr[i][j] += Math.max(left_child, right_child)
    }
  }
  return arr[0][0]
}

//reduceRight((accumulator, currentValue, currentIndex, array)

longestSlideDown( 
  [[3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]])
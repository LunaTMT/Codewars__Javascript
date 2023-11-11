function findOutlier(arr){
    let [even, odd] = arr.reduce((arr, e) => {e % 2? arr[1]++ : arr[0]++; return arr;}, [0, 0]);
    return even>odd? arr.find(e => e % 2) : arr.find(e => !(e % 2));
  }
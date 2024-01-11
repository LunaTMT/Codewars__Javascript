function sumPairs(arr, target) {
  const hashmap = {};

  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    let complement = target - e;

    if (hashmap.hasOwnProperty(complement)) {
      return [complement, e];
    } 
    hashmap[e] = complement;
  }
  return undefined;
}

sumPairs([1, 4, 8, 7, 3, 15], 8)  
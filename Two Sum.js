function twoSum(arr, target) {
  const idx = {};
    
  for (const [i, e] of arr.entries()) {
      let complement = target - e;
      if (idx.hasOwnProperty(complement)) {
        return [i, idx[complement]]
      }
      idx[e] = i
    }
}
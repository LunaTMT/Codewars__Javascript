function comp(arr1, arr2){
    if (arr1 !== null && arr2 != null){
      arr2 = arr2.map((e) => e**0.5);
      arr1.sort()
      arr2.sort()
      return arr1.every((e, i) => e == arr2[i]);
    } else {
      return false
    }
  }
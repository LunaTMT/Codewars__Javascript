function arrayDiff(arr, b) {
    return arr.filter((e) => !b.includes(e));
  }
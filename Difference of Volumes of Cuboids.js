function findDifference(a, b) {
    a = a.reduce((acc, e) => acc * e, 1);
    b = b.reduce((acc, e) => acc * e, 1);
    return (Math.max(a, b) - Math.min(a, b))
  }
function isValidWalk(arr) {
    const count = arr.reduce((obj, c) => { obj[c] = (obj[c] || 0) + 1; return obj; }, {});
    return arr.length == 10 && count['n'] == count['s'] && count['w'] == count['e']
  }
  
  
  
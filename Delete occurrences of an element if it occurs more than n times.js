function deleteNth(arr,n){
    let seen = {}
    return arr.filter(e => {
      seen[e] = (seen[e] || 0) + 1
      return seen[e] <= n;
    });
  }
  
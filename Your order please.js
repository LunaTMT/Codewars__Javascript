function order(words){
  words = words.split(' ');
  const res = new Array(words.length);
  
  words.forEach(function(e) {
    res[e.match(/\d+/g)-1] = e
  });
  
  return res.join(' ')
}


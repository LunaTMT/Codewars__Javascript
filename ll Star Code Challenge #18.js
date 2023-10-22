function strCount(str, letter){  
  let res = 0;
  for (const character of str) {
    res += (character == letter)? 1:0;
  }
  return res
}
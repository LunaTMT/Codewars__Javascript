function incrementString (str) {
  let matches = str.match(/(.*?)(\d*)$/);

  if (matches) {
    let word = matches[1] || '';
    let number = matches[2] ? String(Number(matches[2]) + 1).padStart(matches[2].length, '0') : '1';
    return word + number
  }
  return str + "1"
  
}
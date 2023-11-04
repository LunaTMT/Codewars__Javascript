var capitals = function (word) {
  return word.split('').map((e, i) => {
    if (e === e.toUpperCase() && e !== e.toLowerCase()) {
      return i;
    }
    return null; 
  }).filter(index => index !== null);
}
  
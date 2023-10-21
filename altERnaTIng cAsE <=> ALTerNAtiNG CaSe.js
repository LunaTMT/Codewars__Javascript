String.prototype.toAlternatingCase = function () {
  let res = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()){
        res += this[i].toUpperCase()
    } else {
        res += this[i].toLowerCase()
    }
  }
  return res
}
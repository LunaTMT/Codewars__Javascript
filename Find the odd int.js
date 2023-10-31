function Counter(arr) {
  const counter = {};
  for (const element of arr) {
    counter[element] = (counter[element] || 0) + 1;
  }
  return counter;
}

function findOdd(arr) {
  const count = Counter(arr);
  for (const key in count) {
    if (count.hasOwnProperty(key) && count[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}


// OR SIMPLY BITWISE XOR TO FIND ODD OCCURENCE
// ALL EVEN NUMBERS CANCEL OUT 1^1 = 0,  1^1^1 = 1
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
function stray(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;
  }
  return result;
}

// or

const findUniq = function (arr) { return arr.reduce((result, num) => result ^ num, 0);};

// or

const stray = nums => nums.reduce((a, b) => a ^ b);
function sumStrings(a, b) {
  [a, b] = padStrings(a, b);
  
  let res = [];
  let [sum, carry] = [0, 0];
  for (let i = a.length - 1; i >= 0; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    [carry, sum] = divmod(sum, 10);
    res.push(sum);
  }
  if (carry) res.push(carry);
  
  // Remove leading zeros before joining the result
  while (res[res.length - 1] === 0 && res.length > 1) {
    res.pop();
  }
  
  return res.reverse().join('');
}

function divmod(dividend, divisor) {
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;
  return [quotient, remainder];
}

function padStrings(str1, str2) {
  const maxLength = Math.max(str1.length, str2.length);
  
  if (str1.length < maxLength) {
    const diffLength = maxLength - str1.length;
    str1 = '0'.repeat(diffLength) + str1;
  }

  if (str2.length < maxLength) {
    const diffLength = maxLength - str2.length;
    str2 = '0'.repeat(diffLength) + str2;
  }

  return [str1, str2];
}

console.log(sumStrings('00103', '08567')); // Output: '08670'

function moveZeros(arr) {
  const res = [];
  let zero_count = 0;
  arr.forEach((e) => { e !== 0? res.push(e) : zero_count ++; });
  return res.concat(Array(zero_count).fill(0));
}

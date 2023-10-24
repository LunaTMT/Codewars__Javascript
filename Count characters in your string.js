function count(str) {
  const counter = {};
  [...str].forEach(item => {counter[item] = (counter[item] || 0) + 1;});
  return counter;
}
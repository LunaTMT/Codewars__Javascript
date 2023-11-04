function nbDig(n, d) {
  d = d.toString();
  const array = Array.from({ length: n + 1 }, (_, i) => (i ** 2).toString());
  return array.reduce((acc, e) => acc + (e.match(new RegExp(d, 'g')) || []).length, 0);
}
function between(a, b) {
  return Array.from({ length: b - a + 1 }, (_, index) => index + a);
}
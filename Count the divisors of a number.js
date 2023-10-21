function countDivisorsWithPrimeFactorization(number) {
  let divisorCount = 1;
  let currentDivisorCount = 0;
  
  // Find and count the 2's in the prime factorization
  while (number % 2 === 0) {
    number /= 2;
    currentDivisorCount++;
  }
  if (currentDivisorCount > 0) {
    divisorCount *= (currentDivisorCount + 1);
  }

  // Find and count the odd prime factors
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    currentDivisorCount = 0;
    while (number % i === 0) {
      number /= i;
      currentDivisorCount++;
    }
    if (currentDivisorCount > 0) {
      divisorCount *= (currentDivisorCount + 1);
    }
  }

  // If the remaining number is greater than 1, it's a prime factor
  if (number > 1) {
    divisorCount *= 2;
  }

  return divisorCount;
}

countDivisorsWithPrimeFactorization(56)
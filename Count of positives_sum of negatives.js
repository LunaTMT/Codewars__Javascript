function countPositivesSumNegatives(numbers) {
  if (numbers !== null && numbers.length !== 0){
    return numbers.reduce((acc, val) => {(val > 0)? acc[0] += 1 : acc[1] += val; return acc;}, [0, 0]);
  } else {
    return []
  }
}
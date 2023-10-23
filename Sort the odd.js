function sortArray(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    oddNumbers.sort((a, b) => a - b);
    
    let i = 0;
    const res = arr.map(num => (num % 2 !== 0) ? oddNumbers[i++] : num);
    return res
  }

sortArray([5, 3, 2, 8, 1, 4])
const findNb = (m, n=0) => {
    const sum = sumOfCubes(n);
    return sum === m? n : sum < m? findNb(m, n + 1) : -1;
}

const sumOfCubes = n => sumOfNumbers = ((n * (n + 1)) / 2) ** 2;
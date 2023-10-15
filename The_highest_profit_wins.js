function minMax(arr){
  arr.sort((a, b) => a - b) //sort in ascending order
  return {
    lowest: arr[0],
    highest: arr[arr.length - 1]
  };

}

const numbers = [7, 3, 11, 1, 9, 2];
const result = minMax(numbers);

console.log("Sorted Array:", numbers); // The original array is sorted in place
console.log("Lowest:", result.lowest);     // Lowest: 1
console.log("Highest:", result.highest);  
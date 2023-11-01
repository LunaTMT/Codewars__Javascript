function highAndLow(nums){
  nums = nums.split(" ").map(Number);
  return `${Math.max(...nums)} ${Math.min(...nums)}` 
}
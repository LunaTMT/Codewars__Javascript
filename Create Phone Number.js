function createPhoneNumber(nums) {
    return `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;
    // better code 
    // return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');

}
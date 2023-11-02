
function solution(arr){
    let result = [];
    let rangeStart = arr[0];
    let rangeEnd = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1] + 1) {
        // Expand the range if the current number is consecutive
        rangeEnd = arr[i];
      } else {
        // If a range spans at least 3 numbers, add it to the result
        if (rangeEnd - rangeStart >= 2) {
          result.push(`${rangeStart}-${rangeEnd}`);
        } else {
          // Otherwise, add individual numbers
          for (let j = rangeStart; j <= rangeEnd; j++) {
            result.push(j.toString());
          }
        }
  
        rangeStart = rangeEnd = arr[i];
      }
    }
    
    // Handle the last range or individual number
    if (rangeEnd - rangeStart >= 2) {
      result.push(`${rangeStart}-${rangeEnd}`);
    } else {
      for (let j = rangeStart; j <= rangeEnd; j++) {
        result.push(j.toString());
      }
    }
    
    return result.join(',')
  }




//Very nice solution from codewars
function solution(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
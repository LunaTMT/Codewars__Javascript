function findMissingLetter(arr)
{
  for(let i=0; i < arr.length; i++){
    if (arr[i].charCodeAt(0) != arr[i+1].charCodeAt(0)-1) return String.fromCharCode(arr[i].charCodeAt(0)+1);
  }
}
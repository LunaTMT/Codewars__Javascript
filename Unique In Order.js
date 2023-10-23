var uniqueInOrder=function(arr){
  const stack = [arr[arr.length-1]];
  for (const e of [...arr].reverse()){
    if(e !== stack[stack.length-1]){
       stack.push(e)
    }
  }
  return (arr != [undefined])?  stack.reverse() : []
}
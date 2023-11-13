function dirReduc(arr){
    get_opposite = { "NORTH" : "SOUTH",
                     "EAST" : "WEST",
                     "SOUTH" : "NORTH",
                     "WEST" : "EAST" }
    
    let stack = [];
    for (const e of arr) {
       (stack && stack[stack.length - 1] === get_opposite[e]) ? stack.pop() : stack.push(e);
    }
    return stack
  }
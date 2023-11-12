function validBraces(str){
    let stack = []
    let opposite = {"(" : ")",
                    "{" : "}",
                    "[" : "]"}
    for (const e of str){
        if (opposite[stack[stack.length - 1]] === e) {
            stack.pop();
        } else {
            stack.push(e);
        }
    }
    return stack.length === 0;
  }
function arithmetic(a, b, operator){
    let eval_expression = {
      "add"      : (a, b) => a + b,     
      "subtract" : (a, b) => a - b,     
      "multiply" : (a, b) => a * b,
      "divide"   : (a, b) => a / b
    }
   return eval_expression[operator](a, b)
 }
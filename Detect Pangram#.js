function isPangram(string){
    return string
      .toLowerCase()
      .match(/[a-z]/g)
      .filter((value, index, self) => self.indexOf(value) === index)
      .length == 26
   }
const spinWords = (str) => { return str.split(' ').map(e => {return e.length >= 5? e.split("").reverse().join("") : e; }).join(" ");}
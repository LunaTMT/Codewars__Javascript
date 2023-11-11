const toCamelCase = str => str? str.split(/[^a-zA-Z]+/g).map((e, i) => i==0? e: e[0].toUpperCase() + e.slice(1).toLowerCase()).join('') : ""



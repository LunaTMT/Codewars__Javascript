function likes(names) {
  const l = names.length
  if (l >= 1){
    if (l === 1){ return `${names[0]} likes this`} 
    else if (l === 2){ return `${names[0]} and ${names[1]} like this`} 
    else if (l === 3){ return `${names[0]}, ${names[1]} and ${names[2]} like this`} 
    else if (l > 3)  { return `${names[0]}, ${names[1]} and ${l-2} others like this`} 
  } else { return 'no one likes this' }
}


function scramble(str1, str2) {

  const getCount = str => {
    Count = {}
    for (var e of str){
      Count[e] = (Count[e] || 0) + 1
    }
    return Count
  }
  
  let Count1 = getCount(str1)
  let Count2 = getCount(str2)  
  
  for (const [key, value] of Object.entries(Count2)) {
    if (!Object.keys(Count1).includes(key) || Count1[key] < value) { return false }
  }
  return true
}

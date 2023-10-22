function isPalindrome(x) {
  x =  x.replace('/[^a-zA-Z]/g', '').toLowerCase()
  return x == x.split('').reverse().join('')
}
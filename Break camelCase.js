function solution(str) {
   return str.split(/(?=[A-Z])/).join(' ')
}
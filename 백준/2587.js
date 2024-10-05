// 대표값2
const arr = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(a=> +a)

console.log(arr.reduce((a,c)=> a+c,0) / 5)
console.log(arr.sort((a,b)=> a-b)[2])

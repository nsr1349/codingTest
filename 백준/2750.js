// 수 정렬하기
const arr = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").mao(a=>+a)
arr.shift()
arr.sort((a,b)=> a-b).map(a=> console.log(a))
// 커트라인
const [[_, k], arr] = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(a=> a.split(' ').map(a=> +a))

console.log(arr.sort((a,b)=> b-a)[k-1])
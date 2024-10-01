// 세 막대
const [a,b,c] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ").map(a=> +a).sort((a,b)=> a-b)

console.log(a + b > c ? a+b+c : a+b+(a+b-1))
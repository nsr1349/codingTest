const [A,B,V] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ").map(a=> +a)

console.log(Math.ceil((V-A)/(A-B))+1)
const [ N, K ] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ").map(a=> +a)
const arr = []

for(let i = 1 ; i < N + 1; i++)
    if (N % i === 0) arr.push(N/i)

console.log(arr.sort((a, b) => a-b)[K-1] || 0)

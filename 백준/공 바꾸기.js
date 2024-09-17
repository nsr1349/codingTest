const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map((a)=> a.split(' ').map((a)=> +a))

let temp = 0
const [n, m] = input[0]
const 바구니 = {}
for (let i = 1; i < n+1; i++) 바구니[i] = i

for (let i = 1; i < m+1; i++){
    const [a,b] = input[i]
    temp = 바구니[a]
    바구니[a] = 바구니[b]
    바구니[b] = temp
}

console.log(Object.values(바구니).join(' '))
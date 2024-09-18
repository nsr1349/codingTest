const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map((a)=> a.split(' ').map((a)=> +a))
let list = []
const N = input[0][0]
for (let i = 1; i < N + 1; i++) list.push(i)
input.shift()

for (const a of input){
    const [ i , j ] = a
    list = [...list.slice(0,i-1), ...list.slice(i-1,j).reverse() , ...list.slice(j,N)]
}

console.log(list.join(' '))




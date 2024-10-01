//대지
const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n"),
        x = [], 
        y = []
input.shift()
const arr = input.map(a=> a.split(' ').map(a=>+a))

for (const [a,b] of arr){
    x.push(a)
    y.push(b)
}
x.sort((a,b)=> a-b)
y.sort((a,b)=> a-b)

console.log((x[x.length-1]- x[0])*(y[y.length-1]- y[0]))
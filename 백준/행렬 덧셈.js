const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const N = +input[0].split(' ')[0]
input.shift()
const arrs = input.map((a)=> a.split(' ').map((a)=> +a))

for (let i = 0 ; i < N; i++) 
    console.log(arrs[i].map((a,j)=> a + arrs[i+N][j]).join(' '))

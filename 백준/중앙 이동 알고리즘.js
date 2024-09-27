const n = +require('fs').readFileSync(0, 'utf-8').toString().trim()

let 면 = 3
for (let i = 2; i <= n; i++) 
    면 = 면*2-1

console.log(면**2)
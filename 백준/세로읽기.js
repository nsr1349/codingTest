const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

const arr = input.map(a=> a.split('')),
        x = Math.max(...arr.map(a=>a.length)),
        y = input.length
let answer = ''

for (let i = 0; i < x; i++){
    for (let j = 0; j < y; j++){
        answer += arr[j][i] ? arr[j][i] : ''
    }
}

console.log(answer)
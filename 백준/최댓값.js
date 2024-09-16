const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map((a)=> +a)

let max = 0
let maxIdx 
for (let i = 0; i < input.length; i++){
    if (max < input[i]){
        max = input[i]
        maxIdx = i
    } 
}

console.log(max)
console.log(maxIdx+1)
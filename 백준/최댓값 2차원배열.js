const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

const arr = input.map(a => a.split(' ').map(a=> +a))
let answer = -1, x , y

for (let i = 0 ; i < arr.length; i ++){ 
    for (let j = 0 ; j < arr[0].length; j ++){
        if (arr[i][j] > answer){
            x = i
            y = j
            answer = arr[i][j]
        }
    }
}

console.log(answer)
console.log(x + 1 , y + 1)
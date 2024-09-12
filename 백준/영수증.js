const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

let 총가격 = 0

for(let i = 2; i < input.length; i ++){
    const [가격, 개수] = input[i].split(' ').map((a)=> +a)
    총가격 += 가격 * 개수
}

console.log(input[0] == 총가격 ? 'Yes' : 'No')
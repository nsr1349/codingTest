// 체스판 다시 칠하기
const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const [N, M] = input.shift().split(' ').map(a=> +a), answer = []

const 최소로칠할수 = (x, y) => {
    let n1 = 0, 
        n2 = 0, 
        체스판 = [
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW'
    ]

    for (let i = 0; i < 8; i++)
        for (let j = 0; j < 8; j++)
            체스판[i][j] === input[i+x][j+y] ? n1++ : n2++
        
    return Math.min(n1,n2)
}

for (let x = 0; x < N-7; x++)
    for (let y = 0; y < M-7; y++)
        answer.push(최소로칠할수(x, y))

console.log(Math.min(...answer))
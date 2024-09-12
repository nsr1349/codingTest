const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
input[0] = input[0].split(' ').map((a)=> +a)
let time = input[0][0] * 60 + input[0][1] + + input[1]

if (time >= 1440) time -= 1440

console.log(`${Math.floor(time / 60)} ${time % 60}`)
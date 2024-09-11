const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ").map((a)=> +a)

let time = input[0] * 60 + input[1] -45
if (time < 0) time = 1440 + time

console.log(`${Math.floor(time / 60)} ${time % 60}`)




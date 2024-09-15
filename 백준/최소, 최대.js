const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const arr = input[1].split(' ')

console.log(Math.min(...arr), Math.max(...arr));
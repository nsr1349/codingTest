const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

console.log(input[0][input[1]-1])
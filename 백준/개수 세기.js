const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

console.log(input[1].split(' ').filter((a)=> a === input[2]).length)